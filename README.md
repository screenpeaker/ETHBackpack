# ETHBackpack
ETHDenver 2019 Project

View the contract: https://rinkeby.etherscan.io/address/0x95707d79e803c3ff32ecc0cf223af6416c2b90ad
View the app: http://ethbackpack.herokuapp.com/
ETHDenver Submission: https://kauri.io/article/d3d2bcaa4e494319943cf7ff4a49e659/v3/ethbackpack

# Project Name

- ETHBackpack

# Project Tagline/Description (140 Characters Max. Will be used on table card for judging)

- Live, on-chain, IT certifications and degrees. Show you have certificates such as CCNA, AWS Certificate, Certified Bitcoin Professional with an ETH Wallet address. 

# Team Members. First and Last Names
- Josh Forman
- Peter Hendrick
- Ron Stoner
- Sean Martin

# Status.im ID for Each Team Member (we will use this to contact you and your team)
- Ron Stoner: 'Stoner'
- Josh Forman: 'JJArrow'

# Detailed Project Description (no more than 3-4 sentences)
- ETHBackpack can allow companies that distribute professional certificates on the Ethereum blockchain. 
- Individuals seeking employment or contract work can show their credentials in a public, verifiable way. 
- Employers seeking to hire professionals could potentially search for applicants that have the certs they want. They can also verify that an applicant has the certificate they wanted. 


# Describe your tech stack (e.g., protocols, languages, API’s, etc.)
**- Front End:**
-  React
- JavaScript 

**- Back End:**
- Node.js
- Web3
- MetaMask 
- Open Zeppelin 

# Track for which you’re submitting (Open or Impact)
  - Open track

# All Bounties Completed/Incorporated
- Zeppelin
- SALT
 

# A link to all your source code on a public repo (i.e. Github)
- `http://ethbackpack.herokuapp.com/`
- `https://github.com/screenpeaker/ETHBackpack/`
- `https://github.com/peterhendrick/ethdenver` [front end code]

==Techical Stuff==

<br><br>
Note: All build JSON artifacts need to be removed before redeploying.
<br>
<br>
<b>TO DEPLOY:</b>
<br>rm build/contracts/*
<br>truffle compile
<br>truffle migrate


TRUFFLE TOKEN MINTING:
truffle console
let instance = await MyNFT.deployed()
let accounts = await web3.eth.getAccounts()

result = await instance.mintWithTokenURI('0x4dfD643708e1bF044Ee1Ed04e2C2Fb772a5a9C90', 2, '20df70')
result  (Should return a txid)



VERIFY TOKEN
instance.ownerOf(2)		- Show token owner
instance.tokenURI(2)  	- Show token URI / Metadata 
