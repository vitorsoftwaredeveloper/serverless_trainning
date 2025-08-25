# para configurar os acessos
aws configure

# criar um bucket de exemplo para verificar se as credencias estao corretas
aws s3api create --bucket vsf-hello-bucket

# inserindo um file no bucket
aws s3 cp aula-01-credentials/hello.txt s3://vsf-hello-bucket

# remover os arquivos de dentro do bucket
aws s3 rm s3://vsf-hello-bucket --recursive