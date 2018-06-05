# List Humble Steam Keys

This lists the un-revealed Steam keys for games in your Humble Bundle account.

This seems to work as far as I've checked, but no guarantees.

In particular, I have not yet checked how it handles very old keys
from before Humble Bundle started making Steam keys click-to-reveal.

So while I can't guarantee anything, I especially can't guarantee this will
be correct about if you still have a good Humble Indie Bundle 2 key.

# DISCLAIMERS

* I am not liable...:
    * ...if this code sets your computer on fire.
    * ...if this code steals all your keys.
    * ...if this code says you have a key you've already used, and you try to trade it to someone without checking first
* Before running this, look at the code (or ask someone) to make sure this won't steal all your keys.
    * It won't, but don't take my word for it.
* `.har` files contain PRIVATE information that can probably be used to hijack your account and steal all your keys.
* NEVER share a `.har` file you made.

## Usage

* Install NodeJS from https://nodejs.org/en/
* Download or clone this repo
    * Then unpack it somewhere you'll remember
* Get a HAR from https://humblebundle.com/home/keys
    1. In a new Chrome window, open the Developer Tools
    2. Click on the "Network" tab
    3. Navigate to https://humblebundle.com/home/keys
    4. Right-click on any request and Save as HAR to whichever folder you saved this repo to.
        * It should be named `www.humblebundle.com.har`
* In a command prompt, go to the folder where you've saved the HAR and where index.js is.
* run:

  ```
  npm install
  node index.js
  ```

  To save the list to a text file, run:

  ```
  node index.js > my-keys.txt
  ```

* Delete the `www.humblebundle.com.har` file when you're done, so you don't forget it's there and someone later finds it and steals all your keys.

## Future work

If I ever work on this again, I might:

* Support other `.har` filenames
* Support different key types
* Optionally Show revealed-key games
* Show Steam ID
* Make a website where you drag your .har file into the window and it
  shows you a nice table with game names that link to Steam Store pages
    * As nice as it would be, I probably won't do it because I don't want
      to train people to make .har files and then give them to ANY website EVER.

