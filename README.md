# True Feedback (Mystery Message) 🕵️‍♂️✉️

**True Feedback** is an anonymous messaging platform that empowers users to receive honest, unfiltered feedback from their audience or peers. Built with a modern Next.js stack, it ensures privacy, security, and an intuitive user experience.

## ✨ Features

- **Anonymous Messaging:** Receive messages via a public unique link without revealing the sender's identity.
- **AI-Powered Suggestions:** Integrated with OpenAI to suggest engaging messages for senders to break the ice.
- **Secure Authentication:** Robust user login and session management powered by NextAuth.js.
- **Interactive Dashboard:** Manage, read, and delete your received messages in a clean interface.
- **Email Notifications:** Automated email notifications sent via Resend and React Email.
- **Modern UI:** Designed with Tailwind CSS, shadcn/ui, and Radix UI for accessibility and responsiveness.

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router) & [React 18](https://react.dev/)
- **Database:** [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **AI Integration:** [OpenAI API](https://openai.com/)
- **Email Service:** [Resend](https://resend.com/) & [React Email](https://react.email/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Form Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd truefeedback
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` or `.env.local` file in the root of your project and configure the required keys:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000

# OpenAI API Key
OPENAI_API_KEY=sk-your-openai-api-key

# Resend API Key for Emails
RESEND_API_KEY=re_your_resend_api_key
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 License
This project is licensed under the MIT License.
