# iac-pulumi
CSYE6225 - Cloud Computing - IAC - Pulumi


pulumi login --local

pulumi new --force
export AWS_PROFILE=dev
echo $AWS_PROFILE
pulumi up
pulumi destroy

pulumi config set aws:region us-west-2


sudo systemctl status csye6225_webapp
journalctl -u csye6225_webapp