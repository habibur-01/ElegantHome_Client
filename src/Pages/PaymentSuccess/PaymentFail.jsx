const PaymentFail = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-2xl font-medium">Payment failed. Try again.</h1>
        <button className="btn btn-primary mt-6">
          <a href="/">Back to home</a>
        </button>
      </div>
    </div>
  );
};

export default PaymentFail;
