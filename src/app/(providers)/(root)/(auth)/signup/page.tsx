import Header from 'app/(providers)/(components)/Header';
import SingUp from './_components/SignUp';
import Footer from 'app/(providers)/(components)/Footer';

const SignUpPage: React.FC = () => {
  return (
    <main className="">
      <Header />
      <div className="">
        <SingUp />
      </div>
      <Footer />
    </main>
  );
};
export default SignUpPage;
