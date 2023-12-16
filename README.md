# Redirectit
Let's see how long before Spez blocks this.

## What Is This?
A Firefox browser extension designed to circumvent Reddit's VPN and empty user-agent blocks by redirecting the user to the equivalent page on old.reddit.com.

## Why Do This?
I'm tired of big tech, tech bros, and their profit-before-everything control freak nature. I'm tired of the idea that we have to accept intrusions into our privacy, data hoarding, and every stupid whimsical policy they come up with. I'm tired of the idea that we have to follow their rules on their sites - and at the same time, society is construed so it's impossible not to use their terrible products. So, I'm going to do everything I can to get around these stupid, profit-driven, privacy-invading arbitrary "rules" for as long as is feasible.

To put it simply, I aim to misbehave.

## Cool. How Do I Install This?
I'm assuming you:
* Use Firefox
* Know how to use a terminal or CLI
* Have an account with Mozilla's Add-On Developer Hub
	* Get one [here](https://accounts.firefox.com/signin "here") if you don't already
* You have API keys through the Developer Hub
	* Go [here](https://addons.mozilla.org/en-US/developers/addon/api/key/ "here") to enter your Developer Hub account and generate some if you need them
* Have installed and know how to use web-ext (Mozilla's tool for signing addons)
	* Mozilla has an installation how-to right [here](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/ "here")


1. (From your CLI) `git clone https://github.com/NicholasTaylor/redirectit.git`
2. `cd redirectit`
3. `AMO_JWT_ISSUER=Your_JWT_Issuer_Here`
4. `AMO_JWT_SECRET=Your_JWT_Secret_Here`
5. `web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET`
6. Open this folder in Explorer/Finder/Nautilus/whatever and navigate to the newly-created `web-ext-artifacts` folder.
7. Look for a file with a .xpi file extenions. Right-click it and choose to open it in Firefox (or drag and drop it into Firefox)
8. Approve when Firefox asks for confirmation
9. ????
10. PROFIT!
## Yeah, that's cool. Now make it for Chrome
No. I hate Chrome. And I hate Google. Manifest v3 is going to be a nightmare. If you want to fork my code and make a Chrome extension yourself, go ahead. That's the point of open source. It's only, like, 15 lines of JS anyway, lol.