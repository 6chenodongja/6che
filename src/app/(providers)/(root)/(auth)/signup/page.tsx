import SingUp from './_components/SignUp';

function SignUpPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50">
      <div className="flex-grow flex justify-center items-center w-full md:mt-[46px] md:mb-[199px]">
        <SingUp />
      </div>
    </main>
  );
}
export default SignUpPage;
