# Getting Started with the meta api project
Start cloning the project and run `npm install`. Axios is already here !!!

# The goal is to discover a no code solution for multiple API fecthing and consume its own endPoint
- 1 Go on the *https://dashboard.meta-api.io/login* adn create an account. Be sure tu use your wilder alias @wilder.school. It will offer you an upgrade plan for one year.
- 2 In your dashboard, click on the *Open Spells* menu on the left. You will see a catalogs of ready to use code for testing. Choose the *Starter Spell: Yodish a Chuck Norris fact* and click on *Use this Spell* => *Continue* => *Save and Run*
At this point, you will see the result of your spell on a `json` format. Click on *Push to production*
```
What does it do ? It request a random Chuck Norris Fact with an Api and then translate it in a Yoddish language thanks to another API.
```
- 3 Back on your interface, you can click on the *Spells* on the menu, Select your spell and * Edit Code* on the right. You will see the actual back end code running for you. Just made as magic...
- 4 Go back on your *Spell* interface and select again the *Chuck Norris Spell*. Click on *Deployments details* and memorize the url ('We will fetch it later on react').
- 5 Last thing, on the left menu, click on *Meta-API Keys*, to get your private API KEY and memorize it to.

`ADVICE` you can store your API Key and your Spell ID on a `.env` file in your project

## The React APP
- 1 On your `App.jsx` file, create a button to launch the request for the spell. We want our user to click to get a random fact.
- 2 On this button, add a method `getFact()` and create it. In this method, fetch the url of your spell (Don't forget to add your apikey at the end)
`https://api.meta-api.io/api/spells/${process.env.REACT_APP_META_API_SPELL}/runSync?apikey=${process.env.REACT_APP_META_API}`. Store the result on a state.
- 3 Now use this object to display the Chuck Norris Translation..

## Easy...
Don't hesitate to discover more staff on this solution. They have a lot of ready to use Api connector to protect your sensitive key.