provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "server" {
  ami           = "ami-04680790a315cd58d"
  instance_type = "t2.micro"
  key_name      = "devops_shine.pem"

  tags = {
    Name = "todo-server"
  }
}