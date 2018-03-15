## usersテーブル

| Column   | Type  |           Options            |
|----------|-------|------------------------------|
|name      |string |null: false, foreign_key: true|
|email     |string |null: false, foreign_key: true|
|password  |string |null: false, foreign_key: true|
|member_id |integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :messages


## membersテーブル

| Column | Type  |           Options            |
|--------|-------|------------------------------|
|user_id |string |null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id |integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|  Column  | Type  |           Options            |
|----------|-------|------------------------------|
|group_name|string |null: false, foreign_key: true|
|member_id |integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :menmbers
- has_many :messages


## messagesテーブル

| Column | Type  |           Options            |
|--------|-------|------------------------------|
|message |text   |null: false, foreign_key: true|
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group