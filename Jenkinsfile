@Library('shared-utils') _
 
 
akkaDeliveryPipeline(scmUrl: 'git@github.com:RETISIO/arc-search-config.git',
                                          branch: env.BRANCH_NAME,
                      bitbucketCredentialsId: 'cicdadminaie',
                      appName: 'searchconfig',
                      dockerDirectory: 'target/docker/stage',
                      dockerImage: 'gcr.io/cloudopsplatform/searchconfig',
                      dockerCredentialsId: 'cloudopsplatform',
                      databaseCredentialsId: 'searchconfig-db-creds',
                      unitTests: false,
                      flywayMigrate: true)
