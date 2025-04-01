# Micro-service information 
## 1. Monolithic vs Microservices
### Differences, Benefits, and Challenges
- **Monolithic Architecture**: A single unified codebase where all components (UI, business logic, and data access) are tightly coupled.
- **Microservices Architecture**: A system where applications are divided into smaller, independent services communicating via APIs.

#### **Real-Life Example**:
A traditional e-commerce website built as a monolith may include user management, order processing, and payment handling within a single codebase. In contrast, a microservices-based e-commerce system would separate these functionalities into independent services.

## 2. Principles of Microservices
- **Decentralized Data Management**: Each microservice manages its own database, ensuring loose coupling.
- **Communication Between Services**: Can be REST, gRPC, or message queues.
- **Fault Tolerance**: Circuit breakers (Hystrix) can handle failures gracefully.

#### **Real-Life Example**:
Netflix uses circuit breakers to handle service failures and message queues like Kafka for event-driven communication.

## 3. Designing Microservices
- **Study Domain-Driven Design (DDD)**: Focus on breaking applications into bounded contexts.
- **Business Capability-Based Services**: Identify core business domains and create services accordingly.

#### **Real-Life Example**:
An online banking system may separate services like Account Management, Transactions, and Fraud Detection.

## 4. Service Discovery & Load Balancing
- **Service Registries**: Tools like Eureka, Consul, and etcd help discover services dynamically.
- **Load Balancing**: Strategies include round-robin (Nginx) and client-side balancing (Spring Cloud Ribbon).

#### **Real-Life Example**:
Uber uses service discovery to manage and scale its ride-matching services dynamically.

## 5. API Gateway
- **Role**: Central entry point for microservices.
- **Features**: Request routing, authentication, and aggregation.

#### **Real-Life Example**:
Amazon API Gateway handles authentication and request routing for AWS Lambda functions.

## 6. Inter-Service Communication
- **Synchronous**: REST, gRPC for real-time interactions.
- **Asynchronous**: Kafka, RabbitMQ for event-driven communication.

#### **Real-Life Example**:
WhatsApp uses asynchronous messaging (Kafka) to handle billions of messages efficiently.

## 7. Database in Microservices
- **DB per Service**: Each service has its own database to avoid dependencies.
- **Data Synchronization**: Event sourcing, Change Data Capture (CDC) techniques.

#### **Real-Life Example**:
Amazon splits its database across microservices to handle scalability without affecting performance.

## 8. Deployment
- **CI/CD Pipelines**: Automate testing and deployment (Jenkins, GitHub Actions).
- **Docker & Kubernetes**: Containerization and orchestration.

#### **Real-Life Example**:
Spotify uses Kubernetes to manage microservices deployment efficiently.

## 9. Security in Microservices
- **Authentication & Authorization**: OAuth2, JWT.
- **Secure Communication**: TLS encryption.

#### **Real-Life Example**:
Google Cloud services implement OAuth2 and TLS encryption for secure interactions.

## 10. Observability & Monitoring
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana).
- **Tracing**: Jaeger, Zipkin for distributed tracing.
- **Metrics**: Prometheus, Grafana for system health monitoring.

#### **Real-Life Example**:
Twitter uses distributed tracing with Zipkin to monitor microservices interactions in real time.
