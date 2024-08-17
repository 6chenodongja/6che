import Header from 'app/(providers)/(components)/Header';
import SingUp from './_components/SignUp';
import Footer from 'app/(providers)/(components)/Footer';

function SignUpPage() {
  return (
    <main className="containers flex flex-col justify-between items-center w-full min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center">
        <SingUp />
      </div>
      <Footer />
    </main>
  );
}
export default SignUpPage;
