# iac-pulumi
CSYE6225 - Cloud Computing - IAC - Pulumi


sudo aws acm import-certificate --certificate fileb:///Users/nikhil/Downloads/demo_nikhilkarukonda_me/demo_nikhilkarukonda_me.crt --certificate-chain fileb:///Users/nikhil/Downloads/demo_nikhilkarukonda_me/demo_nikhilkarukonda_me.ca-bundle --private-key fileb:///Users/nikhil/Downloads/private.key --profile demo


pulumi login --local

pulumi new --force
export AWS_PROFILE=dev
echo $AWS_PROFILE
pulumi up
pulumi destroy

pulumi config set aws:region us-west-2
pulumi stack select production
pulumi stack ls

sudo systemctl status csye6225_webapp
journalctl -u csye6225_webapp