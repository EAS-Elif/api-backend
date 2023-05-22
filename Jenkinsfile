pipeline{
    
    agent any
    
<<<<<<< HEAD
=======
    environment {
        DOCKERHUB_CREDENTIALS=credentials( 'jenkins-dockerhub')
    }
>>>>>>> refs/remotes/origin/main
    stages {
        
        stage('Clone repository') {
            
            steps {
                git branch: 'main', url: 'https://github.com/EAS-Elif/api-backend.git'
            }
        }
        
        stage('Build image') {
        
            steps {
                sh 'docker build -t eliferdemeas/api-backend:latest .'
            }
        }
        
        stage('Push Docker Image') {
         
            steps {
                script{
                    withCredentials([string(credentialsId: '24cecaf7-2a47-41bc-8c8f-5c6da5e4a64f', variable: 'dockerhubpwd')]) {
                    sh 'docker login -u eliferdemeas -p ${dockerhubpwd}'
                    sh 'docker push eliferdemeas/api-backend:latest'
                    }
                
                }
            }
        }
        stage('Post') {
    
            steps {
                 sh 'docker logout'
            }
        }
    }
}