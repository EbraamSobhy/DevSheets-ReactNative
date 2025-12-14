import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import Markdown from "react-native-markdown-display";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const gitMarkdown = `

**AWS CLI** (Amazon Web Services Command Line Interface) is a unified tool that allows you to manage and interact with all AWS services from your terminal or command prompt. With it, you can create, configure, and control AWS resources such as EC2 instances, S3 buckets, Lambda functions, and more—all using simple commands. 

It’s widely used by developers, system administrators, and DevOps engineers to automate cloud tasks, deploy applications, and manage infrastructure efficiently.

---

## - Config

\`\`\`bash
aws configure --profile profilename  # Create profile  
aws configure output format {json, yaml, yaml-stream, text, table}  # Set output format  
aws configure region (region-name) # Specify AWS Region  
\`\`\`

## - API Gateway

\`\`\`bash
aws apigateway get-rest-apis | jq -r '.items[] | .id + " " + .name'  # List API Gateway IDs and Names  
aws apigateway get-api-keys | jq -r '.items[] | .id + " " + .name'  # List API Gateway keys  
aws apigateway get-domain-names | jq -r '.items[] | .domainName + " " + .regionalDomainName'  # List API Gateway domain names  
aws apigateway get-resources --rest-api-id <rest-api-id> | jq -r '.items[] | .id + " " + .path'  # List resources for an API Gateway  
aws apigateway get-integration --rest-api-id <id> --resource-id <resource id> --http-method GET | jq -r '.uri'  # Find Lambda for API Gateway resource  
\`\`\`

## - Amplify

\`\`\`bash
aws amplify list-apps | jq -r '.apps[] | .name + " " + .defaultDomain'  # List Amplify apps and source repository  
\`\`\`

## - CloudFront

\`\`\`bash
aws cloudfront list-distributions | jq -r '.DistributionList.Items[] | .DomainName + " " + .Origins.Items[0].DomainName'  # List CloudFront distributions and origins  
aws cloudfront create-invalidation [distribution-id]  # Create a new invalidation  
\`\`\`

## - CloudWatch

\`\`\`bash
aws cloudwatch describe-alarms | jq -r '.MetricAlarms[] | .AlarmName + " " + .Namespace + " " + .StateValue'  # List information about alarms  
aws cloudwatch delete-alarms --alarm-names (alarmnames)  # Delete alarm(s) (can delete up to 100 at a time)  
\`\`\`

## - Cognito

\`\`\`bash
aws cognito-idp list-user-pools --max-results 60 | jq -r '.UserPools[] | .Id + " " + .Name'  # List user pool IDs and names  
aws cognito-idp list-users --user-pool-id <pool-id> | jq -r '.Users[].Attributes | from_entries | .sub + " " + .phone_number + " " + .email'  # List phone and email of all users in a pool  
\`\`\`

## - DynamoDB

\`\`\`bash
aws dynamodb list-tables | jq -r .TableNames[]  # List DynamoDB tables  
aws dynamodb scan --table-name <table-name>  # Get all items from a table  
aws dynamodb scan --table-name <table-name> --select count | jq .ScannedCount  # Get item count from a table  
aws dynamodb get-item --table-name <table-name> --key '{"email":{"S":"email@example.com"}}'  # Get item by key  
aws dynamodb get-item --table-name <table-name> --key '{"email":{"S":"email@example.com"}}' --attributes-to-get event_type  # Get specific attributes from an item  
aws dynamodb delete-item --table-name <table-name> --key '{"email":{"S":"email@domain.com"}}'  # Delete item by key  
\`\`\`

## - EBS

\`\`\`bash
aws ebs complete-snapshot <snapshot-id>  # Complete a snapshot  
aws ebs start-snapshot --volume-size <value>  # Start a snapshot  
aws ebs get-snapshot-block --snapshot-id <value> --block-index <value> --block-token <value>  # Get a snapshot block  
\`\`\`

## - EC2

\`\`\`bash
aws ec2 describe-instances | jq -r '.Reservations[].Instances[] | .InstanceId + " " + .InstanceType + " " + (.Tags[] | select(.Key=="Name").Value)'  # List Instance ID, Type and Name tag  
aws ec2 describe-instances --query 'Reservations[*].Instances[?not_null(PublicIpAddress)]' | jq -r '.[][] | .PublicIpAddress + " " + (.Tags[] | select(.Key=="Name").Value)'  # List Instances with public IP address and Name tag  
aws ec2 describe-vpcs | jq -r '.Vpcs[] | .VpcId + " " + (.Tags[] | select(.Key=="Name").Value) + " " + .CidrBlock'  # List VPCs and CIDR IP Block  
aws ec2 describe-subnets --filter Name=vpc-id,Values=<vpc-id> | jq -r '.Subnets[] | .SubnetId + " " + .CidrBlock + " " + (.Tags[] | select(.Key=="Name").Value)'  # List Subnets for a VPC  
aws ec2 describe-security-groups | jq -r '.SecurityGroups[] | .GroupId + " " + .GroupName'  # List Security Groups  
aws ec2 describe-instances --instance-ids <instance-id> | jq -r '.Reservations[].Instances[].SecurityGroups[] | .GroupId + " " + .GroupName'  # Print Security Groups for an Instance  
aws ec2 modify-instance-attribute --instance-id <instance-id> --groups <sg-ids...>  # Edit Security Groups of an Instance  
aws ec2 describe-security-groups --group-ids <group-id> | jq -r '.SecurityGroups[].IpPermissions[] as $p | ($p.IpRanges[].CidrIp + " " + ($p.ToPort|tostring))'  # Print Security Group Rules (FromAddress + ToPort)  
aws ec2 authorize-security-group-ingress --group-id <group-id> --protocol tcp --port 443 --cidr <cidr>  # Add Ingress Rule to Security Group  
aws ec2 revoke-security-group-ingress --group-id <group-id> --protocol tcp --port 443 --cidr <cidr>  # Delete Ingress Rule from Security Group  
aws ec2 update-security-group-rule-descriptions-ingress --group-id <group-id> --ip-permissions 'ToPort=443,IpProtocol=tcp,IpRanges=[{CidrIp=<cidr>,Description=<desc>}]'  # Update Security Group Rule descriptions  
aws ec2 delete-security-group --group-id <group-id>  # Delete Security Group  
\`\`\`

## - ECS

\`\`\`bash
aws ecs create-cluster --cluster-name <NAME> --generate-cli-skeleton  # Create an ECS cluster  
aws ecs create-service  # Create an ECS service  
\`\`\`

## - EKS

\`\`\`bash
aws eks create-cluster --name <cluster-name>  # Create an EKS cluster  
aws eks delete-cluster --name <cluster-name>  # Delete an EKS cluster  
aws eks describe-cluster --name <cluster-name>  # Describe a cluster  
aws eks list-clusters  # List clusters in default region  
aws eks tag-resource --resource-arn <resource_ARN> --tags <tags>  # Tag a resource  
aws eks untag-resource --resource-arn <resource_ARN> --tag-keys <tag-keys>  # Untag a resource  
\`\`\`

## - ElastiCache

\`\`\`bash
aws elasticache describe-cache-clusters | jq -r '.CacheClusters[] | .CacheNodeType + " " + .CacheClusterId'  # Get info about a specific cache cluster  
aws elasticache describe-replication-groups | jq -r '.ReplicationGroups[] | .ReplicationGroupId + " " + .NodeGroups[].PrimaryEndpoint.Address'  # List ElastiCache replication groups  
aws elasticache describe-snapshots | jq -r '.Snapshots[] | .SnapshotName'  # List ElastiCache snapshots  
aws elasticache create-snapshot --snapshot-name <name> --replication-group-id <rg-id> --cache-cluster-id <cluster-id>  # Create snapshot  
aws elasticache delete-snapshot --snapshot-name <name>  # Delete snapshot  
aws elasticache increase-replica-count --replication-group-id <rg-id> --apply-immediately  # Scale up replica count  
aws elasticache decrease-replica-count --replication-group-id <rg-id> --apply-immediately  # Scale down replica count  
\`\`\`

## - ELB / ELBV2

\`\`\`bash
aws elbv2 describe-load-balancers --query 'LoadBalancers[*].DNSName' | jq -r 'to_entries[] | .value'  # List ELB (v2) hostnames  
aws elbv2 describe-load-balancers | jq -r '.LoadBalancers[] | .LoadBalancerArn'  # List ELB ARNs  
aws elbv2 describe-target-groups | jq -r '.TargetGroups[] | .TargetGroupArn'  # List target group ARNs  
aws elbv2 describe-target-health --target-group-arn <arn> | jq -r '.TargetHealthDescriptions[] | .Target.Id'  # Find instances for a target group  
\`\`\`

## - IAM — Groups / Policies / Users

\`\`\`bash
aws iam list-groups | jq -r '.Groups[].GroupName'  # List groups  
aws iam create-group --group-name <groupName>  # Create group  
aws iam list-policies | jq -r '.Policies[] | .PolicyName + " " + .Arn'  # List all policies  
aws iam list-policies --scope AWS | jq -r '.Policies[] | .PolicyName + " " + .Arn'  # List AWS-managed policies  
aws iam list-policies --scope Local | jq -r '.Policies[] | .PolicyName + " " + .Arn'  # List custom policies  
aws iam list-entities-for-policy --policy-arn <policyArn>  # List entities attached to a policy  
aws iam list-attached-group-policies --group-name <groupName>  # List policies attached to a group  
aws iam attach-group-policy --group-name <groupName> --policy-arn <policyArn>  # Attach policy to group  
aws iam detach-group-policy --group-name <groupName> --policy-arn <policyArn>  # Detach policy from group  
aws iam add-user-to-group --group-name <groupName> --user-name <username>  # Add user to group  
aws iam remove-user-from-group --group-name <groupName> --user-name <username>  # Remove user from group  
aws iam get-group --group-name <groupName>  # List users in a group  
aws iam list-groups-for-user --user-name <username>  # List groups for a user  
\`\`\`

## - IAM — Users

\`\`\`bash
aws iam list-users | jq -r '.Users[] | .UserId + " " + .UserName'  # List users  
aws iam get-user --user-name <username>  # Get single user  
aws iam create-user --user-name <username>  # Create user  
aws iam delete-user --user-name <username>  # Delete user  
aws iam list-access-keys --user-name <username> | jq -r '.AccessKeyMetadata[].AccessKeyId'  # List access keys for user  
aws iam delete-access-key --user-name <username> --access-key-id <accessKeyID>  # Delete access key for user  
aws iam update-access-key --status Active --user-name <username> --access-key-id <accessKeyID>  # Activate access key  
aws iam update-access-key --status Inactive --user-name <username> --access-key-id <accessKeyID>  # Deactivate access key  
aws iam create-access-key --user-name <username> | jq -r '.AccessKey | .AccessKeyId + " " + .SecretAccessKey'  # Generate new access key for user  
\`\`\`

## - Lambda

\`\`\`bash
aws lambda list-functions | jq -r '.Functions[] | .FunctionName + " " + .Runtime + " " + (.MemorySize|tostring)'  # List Lambda functions: name, runtime, memory  
aws lambda list-layers | jq -r '.Layers[] | .LayerName'  # List Lambda layers  
aws lambda list-event-source-mappings | jq -r '.EventSourceMappings[] | .FunctionArn + " " + .EventSourceArn'  # List source event mappings for Lambda  
aws lambda get-function --function-name <function-name> | jq -r .Code.Location  # Download Lambda function code  
\`\`\`

## - RDS

\`\`\`bash
aws rds describe-db-clusters | jq -r '.DBClusters[] | .DBClusterIdentifier + " " + .Endpoint'  # List DB clusters  
aws rds describe-db-instances | jq -r '.DBInstances[] | .DBInstanceIdentifier + " " + .DBInstanceClass + " " + .Endpoint.Address'  # List DB instances  
aws rds create-db-snapshot --db-snapshot-identifier <snapshot-id> --db-instance-identifier <instance-id>  # Take DB instance snapshot  
aws rds describe-db-snapshots --db-snapshot-identifier <snapshot-id> --db-instance-identifier <instance-id>  # Describe DB instance snapshot  
aws rds create-db-cluster-snapshot --db-cluster-snapshot-identifier <snapshot-id>  # Take DB cluster snapshot  
\`\`\`

## - Route53

\`\`\`bash
aws route53 create-hosted-zone --name <domain-name>  # Create hosted zone  
aws route53 delete-hosted-zone --id <zone-id>  # Delete hosted zone  
aws route53 get-hosted-zone --id <zone-id>  # Get hosted zone info  
aws route53 list-hosted-zones  # List hosted zones  
aws route53 change-resource-record-sets --hosted-zone-id <zone-id> --change-batch file://<batch-file>.json  # Change resource record sets (create/update/delete)  
\`\`\`

## - S3

\`\`\`bash
aws s3 ls  # List buckets  
aws s3 ls s3://<bucket-name>  # List files in a bucket  
aws s3 mb s3://<bucket-name>  # Create a bucket  
aws s3 rb s3://<bucket-name> --force  # Delete a bucket (force)  
aws s3 cp s3://<bucket-name>/<object> <local-path> --recursive --no-sign-request  # Download object from S3 to local  
aws s3 cp <local-file> s3://<bucket-name>/  # Upload local file to S3  
aws s3 rm s3://<bucket-name>/<object>  # Delete object in S3  
aws s3 sync s3://<bucket-name>/ <local-dir>  # Sync bucket to local directory  
aws s3 sync <local-dir> s3://<bucket-name>/  # Sync local directory to S3 bucket  
aws s3 presign s3://<bucket-name>/<file-name> --expires-in <time-in-seconds>  # Pre-sign S3 object URL  
\`\`\`

## - SNS

\`\`\`bash
aws sns list-topics | jq -r '.Topics[] | .TopicArn'  # List SNS topics  
aws sns list-subscriptions | jq -r '.Subscriptions[] | .TopicArn + " " + .Protocol + " " + .Endpoint'  # List SNS subscriptions  
aws sns publish --topic-arn <topic-arn> --message "<message>"  # Publish to an SNS topic  
\`\`\`

## - SQS

\`\`\`bash
aws sqs list-queues | jq -r '.QueueUrls[]'  # List SQS queues  
aws sqs create-queue --queue-name <queue-name>.fifo | jq -r .queueURL  # Create a new queue  
aws sqs send-message --queue-url <url> --message-body "<message>"  # Send a message to queue  
aws sqs receive-message --queue-url <url> | jq -r '.Messages[] | .Body'  # Receive messages  
aws sqs delete-message --queue-url <url> --receipt-handle <receipt-handle>  # Delete a message from queue  
aws sqs purge-queue --queue-url <url>  # Purge queue (delete all messages)  
aws sqs delete-queue --queue-url <url>  # Delete queue  
\`\`\`
`;

export default function Git() {
  const handleCopy = (text) => {
    Clipboard.setStringAsync(text);
    Alert.alert("Copied!");
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#000000",
        padding: 16,
      }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Image
            source={require("../assets/aws.png")}
            style={{
            width: 40,
            height: 40,
            marginRight: 20,
            resizeMode: "cover",
          }}
        />
        <Text
          style={{
            color: "#00ff88",
            fontSize: 26,
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          AWS CLI
        </Text>
      </View>

      {/* Markdown Commands */}
      <Markdown
        style={{
          body: {
            color: "white",
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "monospace",
          },
          heading1: {
            color: "#00ff88",
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 10,
          },
          heading2: {
            color: "white",
            fontSize: 22,
            marginTop: 16,
            marginBottom: 15,
            fontWeight: "bold"
          },
          code_inline: {
            backgroundColor: "#003300",
            color: "#00ff88",
            borderRadius: 4,
            paddingHorizontal: 4,
          },
          code_block: {
            backgroundColor: "#001a00",
            color: "#00ff88",
            borderRadius: 8,
            padding: 10,
            fontFamily: "monospace",
          },
          fence: {
            backgroundColor: "#001a00",
            color: "#00ff88",
            borderRadius: 8,
            padding: 10,
          },
          strong: {
            color: "#39ff14",
          },
          link: {
            color: "#00ff88",
            fontSize: 20
          },
          image: { 
            borderRadius: 10, 
            marginVertical: 10 
        },

         hr: {
          borderColor: "#00ff88", 
          borderWidth: 0.5,
          marginVertical: 10,
          marginTop: 15
        },

        }}
        rules={{
          fence: (node) => {
            const codeText = node.content;
            const language = node.info || "bash";

          return (
            <View
              key={Math.random()}
              style={{
                borderRadius: 8,
                marginVertical: 10,
                overflow: "hidden",
              }}
            >
              {/* Header Bar */}
              <View
                style={{
                  backgroundColor: "black",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderWidth: 1,
                  borderColor: "green",
                  borderStyle: "solid", 
                  borderRadius: 6, 
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontFamily: "monospace",
                  }}
                >
                  {language}
                </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "transparent",
                  }}
                  onPress={() => handleCopy(codeText)}
                >
                  <MaterialCommunityIcons
                    name="content-copy"
                    size={14}
                    color="white"
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    Copy
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Code Area */}
              <Text
                selectable
                style={{
                  color: "#00ff88",
                  fontFamily: "monospace",
                  fontSize: 14,
                  backgroundColor: "#001a00",
                  padding: 10,
                  lineHeight: 20,
                }}
              >
                {codeText.trim()}
              </Text>
            </View>
          );
            },
        }}
      >
        {gitMarkdown}
      </Markdown>
    </ScrollView>
  );
}
