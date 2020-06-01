# sample-express-api
Sample express Api

## For demo purposes ONLY
```
sudo yum update

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

sudo yum install git
git clone https://github.com/serjkazhura/sample-express-api.git
cd sample-express-api

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000

node index.js
```