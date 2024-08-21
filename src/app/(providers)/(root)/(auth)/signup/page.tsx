import SingUp from './_components/SignUp';

function SignUpPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50  pt-[80px] pb-[199px]">
      <div className="flex-grow flex justify-center items-center w-full">
        <SingUp />
      </div>
    </main>
  );
}
export default SignUpPage;
