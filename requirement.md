# Software Requirement Specification (SRS) for Quiz Platform

## 1. Introduction

### 1.1 Purpose
The Quiz Platform allows users to log in, create groups, post quizzes, and participate in quizzes within a time limit. The system manages quiz scores, leaderboards, and permissions within groups.

### 1.2 Scope
- User authentication (login/logout)
- Group creation and management
- Quiz creation, participation, and evaluation
- Time-restricted quizzes
- Leaderboards based on scores

## 2. Functional Requirements

### 2.1 User Authentication
- Users can register and log in.
- Each user has a unique username and password.

### 2.2 Group Management
- Users can create groups and generate a group code.
- Other users can join groups using the group code.
- Group admins can remove users from the group.

### 2.3 Quiz Management
- Admins can create quizzes within groups.
- Each quiz has a time window (start and end time).
- Users can attempt quizzes only within the active period.
- Each quiz has a duration (e.g., 20 minutes from the start time).
- Admins mark correct answers after quiz creation.

### 2.4 Quiz Participation
- Users can start a quiz within the active period.
- Users must complete the quiz within the set duration.
- Quizzes automatically submit at the end of the duration.

### 2.5 Scoring and Leaderboard
- Users receive points based on correct answers.
- Each group has a leaderboard displaying user scores.

## 3. Database Design

### 3.1 Users Table
```markdown
| Column    | Type     | Description          |
|-----------|---------|----------------------|
| id        | INT (PK) | Unique user ID      |
| username  | VARCHAR | Unique username     |
| password  | VARCHAR | Hashed password     |
| email     | VARCHAR | User email          |
```

### 3.2 Groups Table
```markdown
| Column    | Type     | Description                 |
|-----------|---------|-----------------------------|
| id        | INT (PK) | Unique group ID            |
| name      | VARCHAR | Group name                 |
| code      | VARCHAR | Unique group code          |
| admin_id  | INT (FK) | User ID of group creator   |
```

### 3.3 Group Members Table
```markdown
| Column    | Type     | Description                 |
|-----------|---------|-----------------------------|
| id        | INT (PK) | Unique ID                   |
| group_id  | INT (FK) | Group ID                    |
| user_id   | INT (FK) | User ID                     |
```

### 3.4 Quizzes Table
```markdown
| Column      | Type     | Description                     |
|-------------|---------|---------------------------------|
| id          | INT (PK) | Unique quiz ID                 |
| group_id    | INT (FK) | Group ID                       |
| name        | VARCHAR | Quiz title                     |
| start_time  | DATETIME | Start time of the quiz         |
| end_time    | DATETIME | End time of the quiz           |
| duration    | INT      | Duration in minutes            |
| created_by  | INT (FK) | User ID of creator             |
```

### 3.5 Questions Table
```markdown
| Column        | Type     | Description                         |
|--------------|---------|---------------------------------|
| id           | INT (PK) | Unique question ID              |
| quiz_id      | INT (FK) | Quiz ID                         |
| question     | TEXT    | Question text                   |
| option_a     | TEXT    | Option A                        |
| option_b     | TEXT    | Option B                        |
| option_c     | TEXT    | Option C                        |
| option_d     | TEXT    | Option D                        |
| correct_answer | CHAR(1) | Correct option (A/B/C/D)  |
```

### 3.6 Quiz Attempts Table
```markdown
| Column      | Type     | Description                     |
|------------|---------|-------------------------------|
| id         | INT (PK) | Unique attempt ID             |
| quiz_id    | INT (FK) | Quiz ID                       |
| user_id    | INT (FK) | User ID                       |
| start_time | DATETIME | Quiz start time               |
| end_time   | DATETIME | Quiz end time                 |
| score      | INT      | Score earned                  |
```

### 3.7 Leaderboard Table
```markdown
| Column      | Type     | Description                     |
|------------|---------|-------------------------------|
| id         | INT (PK) | Unique leaderboard entry ID   |
| group_id   | INT (FK) | Group ID                      |
| user_id    | INT (FK) | User ID                       |
| total_score | INT     | Total score of user in group  |
```

## 4. Non-Functional Requirements
- The system should support concurrent quiz attempts.
- Secure authentication using hashed passwords.
- Optimized queries for leaderboard calculations.
- A responsive UI for desktop and mobile users.

## 5. Conclusion
This SRS outlines a simple yet functional quiz platform that allows users to create and participate in quizzes within predefined time limits. The system ensures fair evaluation and maintains leaderboards for competitive learning.
