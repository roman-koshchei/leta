# User

|              |                |
|--------------|----------------|
| UUID         | uuid           |
| Email        | stirng         |
| Name         | string         |
| Slug         | string         |
| Bio          | string         |
| SocialLinks  | list of string |
| Settings     | ref            |
| Stats        | ref            |
| AddedLayouts | list of ref    |


# Settings

Save only enviroment settings, test setting can be changed very frequantly. Test settings can be saved to local storage.

|                |        |  
|----------------|--------|
| LiveWpm        | bool   |  
| LiveAcc        | bool   |  
| LiveProgress   | bool   |
| ShowAds        | bool   |
| FontSize       | float  |
| FontFamily     | string |
| LayoutDisplay  | string (or int) |
| BackColor      | string |
| PrimaryColor   | string |
| SecondaryColor | string |
| DangerColor    | string |


# Test

Limit means mod value. For example 15 seconds in time mod. Or 10 for words mod.

|            |            |  
|------------|------------|
| Wpm        | float      |  
| Acc        | float      |
| Difficulty | int or ref |
| Mode       | int or ref |
| Date       | date       |
| Limit      | int        |
| Layout     | ref        |
| Stats      | ref        |


# Stats

Represent info about all taken tests by user.

|           |      |
|-----------|------|
| Started   | int  |
| Tests     | list |  


# Layout

Mode means comparable or freedom

|             |                 |
|-------------|-----------------|
| Name        | string          |
| Date        | date            |
| Creator     | string          |
| Description | string          |
| Website     | string          |
| Mode        | ref or int      |
| TopKeys     | array of string |
| HomeKeys    | array of string |
| BotKeys     | array of string |
| TopFingers  | array of string |
| HomeFingers | array of string |
| BotFingers  | array of string |
| Analysis    | ref             |
| User        | ref             |


# Analisis

| Pair |        |
|------|--------|
| Str  | string |
| Val  | double |

|                        |                 |
|------------------------|-----------------|
| LeftInvardRolls        | double          |
| LeftOutwardRolls       | double          |
| RightInwardRolls       | double          |
| RightOutwardRolls      | double          |
| Alternates             | double          |
| Onehands               | double          |
| Redirects              | double          |
| WeightedFingerSpeed    | array of double |
| UnweightedFingerSpeed  | array of double |
| WeightedHighestSpeed   | `Pair`          |
| UnweightedHighestSpeed | `Pair`          |
| LeftIndexUsage         | double          |
| RightIndexUsage        | double          |
| Sfbs                   | double          |
| Dsfbs                  | double          |
| Lsbs                   | double          |
| TopSfbs                | array of `Pair` |
| WorstBigrams           | array of `Pair` |
| Score                  | double          |