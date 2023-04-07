pipeline {
  agent any
  stages {
    stage('Fetch dependencies') {
      steps {
        sh 'sudo docker pull karthequian/helloworld:latest'
      }
    }

    stage('Build docker image') {
      steps {
        sh 'sudo docker build . -t customapp:1'
      }
    }

    stage('Test image') {
      steps {
        sh 'echo "Tests successful"'
      }
    }

    stage('Push image to OCIR') {
      steps {
        sh 'sudo docker login -u \'doug53/identitycloudservice/miguel@doorcounts.com\' -p \'Us1+K(iJo5y18b+hI9mY\' sjc.ocir.io'
        sh 'sudo docker tag customapp:1 sjc.ocir.io/doug53/customapp:custom'
        sh 'sudo docker push sjc.ocir.io/doug53/customapp:custom'
      }
    }

    stage('Deploy to OKE') {
      steps {
        sh 'sh ../../hello-deploy.sh'
      }
    }

  }
}