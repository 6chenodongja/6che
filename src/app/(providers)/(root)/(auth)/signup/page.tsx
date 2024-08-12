import Header from 'app/(providers)/(components)/Header';
import SingUp from './_components/SignUp';
import Footer from 'app/(providers)/(components)/Footer';

function SignUpPage() {
  return (
    <main className="container flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        <SingUp />
      </div>
      <Footer />
    </main>
  );
}
export default SignUpPage;
