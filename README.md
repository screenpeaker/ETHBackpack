# ETHBackpack
ETHDenver 2019 Project
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
