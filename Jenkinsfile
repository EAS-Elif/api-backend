pipeline{
    
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS=credentials( 'jenkins-dockerhub')
    }
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
        
        stage('Login') {   
            
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        
        stage('Push') {
         
            steps {
                sh 'docker push eliferdemeas/api-backend:latest '
            }
        }
        stage('Post') {
    
            steps {
                 sh 'docker logout'
            }
        }
    }
}
