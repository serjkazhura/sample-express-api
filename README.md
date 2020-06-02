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

# in case you want to redirect traffic - but don't do it!
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000

# remove the redirect
sudo iptables -t nat -D PREROUTING --source 0/0 --destination 0/0 -p tcp --dport 80 -j REDIRECT --to-ports 3000

node index.js

# find out the process
netstat -ltnp | grep -w ':3000'
kill <PROCESS ID>
```