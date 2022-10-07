# User

|              |                |
|--------------|----------------|
| UUID         | uuid           |
| Stats        | ref            |
| AddedLayouts | list of ref    |
| Settings     | ref            |

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

Mode means classic or alternative

|             |                 |
|-------------|-----------------|
| name        | string + pk     |
| keys        | string          |
| fingers     | string          |
| analysis    | ref             |


# Analisis

| Pair |        |
|------|--------|
| Str  | string |
| Val  | double |

|                        |                 |
|------------------------|-----------------|
| rolls                  | double          |   
| alternates             | double          |
| onehands               | double          |
| redirects              | double          |
| weightedFingerSpeed    | array of double |
| unweightedFingerSpeed  | array of double |
| weightedHighestSpeed   | `Pair`          |
| unweightedHighestSpeed | `Pair`          |
| leftIndexUsage         | double          |
| rightIndexUsage        | double          |
| sfbs                   | double          |
| dsfbs                  | double          |
| lsbs                   | double          |
| topSfbs                | array of `Pair` |
| worstBigrams           | array of `Pair` |
| score                  | double          |

| leftInvardRolls        | double          |
| leftOutwardRolls       | double          |
| rightInwardRolls       | double          |
| rightOutwardRolls      | double          |
