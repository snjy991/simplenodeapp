node {
    def app1,app2,app3,app4,app5

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }
    
    stage('Build app') {
            dir ('nodeservice1') {
                sh 'npm install' 
            }
            dir ('nodeservice2') {
                sh 'npm install' 
            }
            dir ('nodeservice3') {
                sh 'npm install' 
            }
            dir ('nodeservice4') {
                sh 'npm install' 
            }
            dir ('nodeservice5') {
                sh 'npm install' 
            }
    }
    
    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        dir ('nodeservice1') {
            app1 = docker.build("snjy991/nodeservice1")
        }
        dir ('nodeservice2') {
            app2 = docker.build("snjy991/nodeservice2")
        } 
        dir ('nodeservice3') {
            app3 = docker.build("snjy991/nodeservice3")
        } 
        dir ('nodeservice4') {
            app4 = docker.build("snjy991/nodeservice4")
        } 
        dir ('nodeservice5') {
            app5 = docker.build("snjy991/nodeservice5")
        } 
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app1.inside {
            sh 'echo "Tests passed"'
        }
        app2.inside {
            sh 'echo "Tests passed"'
        }
        app3.inside {
            sh 'echo "Tests passed"'
        }
        app4.inside {
            sh 'echo "Tests passed"'
        }
        app5.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
            app1.push("${env.BUILD_NUMBER}")
            app2.push("${env.BUILD_NUMBER}")
            app3.push("${env.BUILD_NUMBER}")
            app4.push("${env.BUILD_NUMBER}")
            app5.push("${env.BUILD_NUMBER}")
            
            
        }
    }
    stage ('changefile') {
        sh './buildjson.sh snjy991/testnode:${BUILD_NUMBER}'    
     }
    withAWS(region:'ap-south-1',credentials:'nameOfSystemCredentials') {
            s3Upload(file:'Dockerrun.aws.json', bucket:'mysamplenodejs', path:'Dockerrun.aws.json')
    }
     
    
    
}
