import SingUp from './_components/SignUp';

function SignUpPage() {
  return (
    <main className="flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        <SingUp />
      </div>
    </main>
  );
}
export default SignUpPage;
