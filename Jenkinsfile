def imageTag = "sjc.ocir.io/axwrtlp0n4xv/customapp:${BUILD_NUMBER}"
pipeline {
    agent any
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
                //sh "sudo docker build . -t customapp:1"
                sh "docker build -t ${imageTag} ."
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
                //sh "sudo docker tag customapp:1 sjc.ocir.io/axwrtlp0n4xv/customapp:custom"
                //sh "sudo docker tag sjc.ocir.io/axwrtlp0n4xv/customapp:custom sjc.ocir.io/axwrtlp0n4xv/customapp:${env.BUILD_NUMBER}"
                sh "docker push ${imageTag}"
                //sh 'sudo docker push sjc.ocir.io/axwrtlp0n4xv/customapp:custom'
                
            }
        } 
        stage('Deploy to OKE') {
            /* Deploy the image to OKE*/

            steps {
                /*sh "'sudo cp /var/lib/jenkins/workspace/deploy.sh /var/lib/jenkins/workspace/jenkins-oci_master'"*/
                //sh 'sh ../../hello-deploy.sh'
                sh "kubectl create secret docker-registry secret --docker-server=sjc.ocir.io --docker-username='axwrtlp0n4xv/miguel@doorcounts.com' --docker-password='Us1+K(iJo5y18b+hI9mY' --docker-email='miguel@doorcounts.com'"
                sh "sudo docker login -u 'axwrtlp0n4xv/miguel@doorcounts.com' -p 'Us1+K(iJo5y18b+hI9mY' sjc.ocir.io"
                sh "kubectl apply -f hello.yml --namespace=my-namespace --set image.tag=${imageTag}"
            }
         }     
    }
}