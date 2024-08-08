import Header from 'app/(providers)/(components)/Header';
import SingUp from './_components/SignUp';
import Footer from 'app/(providers)/(components)/Footer';

function SignUpPage() {
  return (
    <main>
      <Header />
      <div>
        <SingUp />
      </div>
      <Footer />
    </main>
  );
}
export default SignUpPage;
