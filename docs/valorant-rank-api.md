# Valorant rank api

I want to expand my hello-world api with some new functionality as the basis for
a future discord bot. A good starting point could be retrieving my own rank
using Riot's API. Let's get started.

## The plan

To build this project, I have a lightweight plan in mind to iterate as I go and
prove assumptions.

1. Research where I can gather this information
    - Make some test calls to the API. See how it behaves.
2. Implement a lambda which calls the API
    - Make a stub which returns content in the desired state. Test.
    - Add an integration to the API. Exclude any necessary authentication if possible. Test.
3. Implement authentication for the API

## The research

First I'll need to understand where I can retrieve this data by looking through
the Riot APIs on their [developer portal](https://developer.riotgames.com/).
I want to get a rank for a given user.

I first looked in the [ranked
api](https://developer.riotgames.com/apis#val-ranked-v1) but it appears this is
strictly for the leaderboard which doesn't offer me the info I'm looking for.
Instead it looks like I'll need to use the [matches
api](https://developer.riotgames.com/apis#val-match-v1/GET_getMatch) which
provides an `int competitiveTier` for all the players in a given match.
Combining this with the
[getMatchlist](https://developer.riotgames.com/apis#val-match-v1/GET_getMatchlist)
API I can take the most recent match and return a rank for a given player!

__note__: credit to [this
article](https://medium.com/the-esports-analyst-club-by-itero-gaming/becoming-a-lol-analyst-an-introduction-to-using-the-riot-api-bb145ec8eb50) for giving some inspiration to look into the match result output.

Lastly I'll need a `puuid` to fetch data for a specific user. Looks like I'll
need to fetch the user with the [getByRiotId account
API](https://developer.riotgames.com/apis#account-v1/GET_getByRiotId).

The overall flow should look something like:

Given a `tagLine` and `gameName`:

1. Call the `getByRiotId` API to retrieve a `puuid`
2. Use the `puuid` to fetch recent matches for the user
3. Take the most recent match and extract the `competitiveTier` for the user
4. Return the competitive tier mapped to the in-game name of the rank

## The work

First I want to have a request with minimal parameters -- otherwise
known as the happy path. Let's look at the documentation around the account API
to see how we can invoke it
[docs](https://developer.riotgames.com/apis#account-v1/GET_getByRiotId). It
looks like I'll have to register an account and get a development API key to
test it out.

I registered and received some development api key. Now I can select this in the
dropdown on their page and submit a sample request using my `gameName` and
`tagLine`. I was able to make a sample request and got back a 200 response with
the expected payload. This request shows me a number of things that will be
useful for my implementation:

- The endpoint used for Americas is `https://americas.api.riotgames.com`
- The `X-Riot-Token` is the header which carries my API key
- The response contains the needed `puuid` to make follow up requests

