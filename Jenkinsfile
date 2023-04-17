pipeline {
    agent any
    environment {
        // DOCKER_IMAGE = 'my-docker-registry.com/my-image'
        DOCKER_TAG = sh(script: 'git describe --tags --abbrev=0', returnStdout: true).trim()
    }
    stages {
        stage('Fetch dependencies') {
        /* This stage pulls the latest image from
           Dockerhub */
            steps {
                sh 'sudo docker image prune -a -f'
                sh 'sudo docker pull miguelreinas/node:latest'
          }
        }
        stage('Build docker image') {
        /* This stage builds the actual image; synonymous to
           docker build on the command line */
            steps {
            sh "sudo docker build . -t customapp:1"
            }    
        }
        stage('Test image') {
         /* This stage runs unit tests on the image; we are
            just running dummy tests here */
            steps {
                sh 'echo "Tests successful approved"'
          }
        }
        stage('Push image to OCIR') {
         /* Final stage of build; Push the 
            docker image to our OCI private Registry*/
        steps {
            sh "sudo docker login -u 'axwrtlp0n4xv/miguel@doorcounts.com' -p 'Us1+K(iJo5y18b+hI9mY' sjc.ocir.io"
            sh "sudo docker tag customapp:1 sjc.ocir.io/axwrtlp0n4xv/customapp:${DOCKER_TAG}"
            //sh "sudo docker tag sjc.ocir.io/axwrtlp0n4xv/customapp:custom sjc.ocir.io/axwrtlp0n4xv/customapp:${DOCKER_TAG}"
            sh 'sudo docker push sjc.ocir.io/axwrtlp0n4xv/customapp:custom'
            
           }
         } 
         stage('Deploy to OKE') {
         /* Deploy the image to OKE*/

        steps {
            /*sh "'sudo cp /var/lib/jenkins/workspace/deploy.sh /var/lib/jenkins/workspace/jenkins-oci_master'"*/
            sh 'sh ../../hello-deploy.sh'
           }
         }     
    }
}