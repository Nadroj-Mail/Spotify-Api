# Spotify-Api
Spotify api code to retrieve an artists data. Genres, followers, popularity, ect...

# Making-an-App
The Client-id and the Client-Secret is found when from the created app dashboard through the setting menu.

<img src="https://cdn.discordapp.com/attachments/1097886338629517433/1122565512455540736/Screenshot_2023-06-25_103308.png" />

which are both needed to generate the access token

# How-To
Place your Client-id and the Client-Secret replaceing the placeholder text in the defined strings

<img src="https://cdn.discordapp.com/attachments/1097886338629517433/1122564596717338716/Screenshot_2023-06-25_103009.png" />

### While on spotify

Since the java Script program is console base it should be ran in the devs console

Press ctrl+shift+j

<img src="https://cdn.discordapp.com/attachments/1097886338629517433/1122564374909960282/Screenshot_2023-06-25_111453.png" />

Paste the [script](https://github.com/Death-Coffin/Spotify-Api/blob/main/accessToken.js) in the console and press enter.

It should output somthing like this

<img src="https://cdn.discordapp.com/attachments/1097886338629517433/1122564421068275813/Screenshot_2023-06-25_111216.png" />


Once the access token is aquired use the [csharp program](https://github.com/Death-Coffin/Spotify-Api/blob/main/Program.cs).

A spotify artist id is the base-62 identifier found at the end of the Spotify URI

<img src="https://cdn.discordapp.com/attachments/1097886338629517433/1122564518829117470/Screenshot_2023-06-25_102515.png" />
<img src="https://cdn.discordapp.com/attachments/1097886338629517433/1122564325547196547/Screenshot_2023-06-25_161719.png" />

Once the program has been apended run it and it should provide info on the artist in a JSON file format, eg:

<img src="https://cdn.discordapp.com/attachments/1097886338629517433/1122564282048069782/Screenshot_2023-06-25_162117.png" />

### More infomation on the docs can be found [here](https://developer.spotify.com/documentation/web-api)
