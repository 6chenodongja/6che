import Header from 'app/(providers)/(components)/Header';
import LoginForm from './_components/LoginForm';
import Footer from 'app/(providers)/(components)/Footer';

function LoginPage() {
  return (
    <main className="container bg-neutral-50 flex flex-col justify-center items-center w-full">
      <div className="bg-[#fafafa60] w-full h-auto">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    </main>
  );
}

export default LoginPage;
