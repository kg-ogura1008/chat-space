## usersテーブル

| Column   | Type  |           Options    |
|----------|-------|----------------------|
|name      |string |null: false, add_index|
|email     |string |null: false,          |

### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members


## membersテーブル

| Column |   Type   |           Options            |
|--------|----------|------------------------------|
|group   |references|null: false, foreign_key: true|
|user    |references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|  Column  | Type  |  Options  |
|----------|-------|-----------|
|group_name|string |null: false|

### Association
- has_many :users, through: :menmbers
- has_many :messages
- has_many :members


## messagesテーブル

| Column |   Type   |           Options            |
|--------|----------|------------------------------|
|text    |text      |                              |
|image   |text      |                              |
|user    |references|null: false, foreign_key: true|
|group   |references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group