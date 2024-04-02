const CommitteeDashboard = () => {
  const membersList = ['Aman', 'Yash', 'Gopal', 'Shobhit', 'Tanush'];
  const paymentDetails = [
    { date: '01-01-2024', amount: 1000, profit: 0 },
    { date: '01-02-2024', amount: 910, profit: 90 },
    { date: '01-03-2024', amount: 800, profit: 200 },
    { date: '01-04-2024', amount: 850, profit: 150 },
  ];

  const handlePayments = async () => {
    // fetch current user details
    let user;
    try {
      const res = await fetch('http://localhost:4000/getuser', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('logintoken'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: localStorage.getItem('userId'),
        }),
      });
      user = await res.json();
      console.log('here is mu user - ', user);
    } catch (error) {
      console.log(error);
    }

    // open razorpay payment gateway for payments
    try {
      const response = await fetch('http://localhost:4000/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1000,
          email: user.email,
        }),
      });

      const data = await response.json();
      console.log(data);

      const options = {
        key: 'rzp_test_ApfDwyyDcj8yjg',
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: user.name,
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone,
        },

        notes: {
          address: 'Razorpay Corporate Office',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className='flex flex-row items-center justify-center gap-10 py-5'>
        <div>
          <img
            className='border-2 border-black rounded-full w-[40%]'
            src='/committee.png'
            alt='committee'
          />
        </div>
        {/* <div className='bg-gray-500 w-[1%] h-[300%]'>.</div> */}
        <div>
          <div className='flex flex-row items-center justify-center gap-2'>
            <h2>Committee Name (Active)</h2>
            <img src='/tick.png' alt='Active' width={30} />
          </div>
          <ul className='text-lg'>
            <li>Number of members : 10</li>
            <li>Admin : Aman</li>
            <li>Duration : 11 months</li>
            <li>Committee Amount per head : ₹1000</li>
            <li>Total Amount Raised : ₹10000</li>
          </ul>
          <button className='btn bg-red-600 mr-4 my-3 hover:bg-red-500'>
            Withdraw
          </button>
          <button className='btn bg-blue-700' onClick={handlePayments}>
            Pay
          </button>
        </div>
      </section>
      <hr className='bg-gray-500 h-[2px]' />
      <section className='p-5 flex justify-around gap-36'>
        <ul>
          <h2>Members</h2>
          {membersList.map((member, idx) => {
            return (
              <div
                className='w-[300%] flex flex-row items-center justify-start gap-2 border-2 border-gray-500 rounded-lg p-2 my-2 bg-blue-100 hover:bg-white cursor-pointer hover:scale-105 transition-transform duration-300'
                key={idx}
              >
                <img src='/user.png' width={35} height={35} alt='member' />
                <li>{member}</li>
              </div>
            );
          })}
        </ul>
        <table className='styled-table'>
          <h2>Payment Details</h2>
          <tr className='font-bold'>
            <td>Date</td>
            <td>Monthly Installment</td>
            <td>Profit</td>
          </tr>
          {paymentDetails.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>{data.date}</td>
                <td>₹{data.amount}</td>
                <td>₹{data.profit}</td>
              </tr>
            );
          })}
        </table>
      </section>
    </>
  );
};

export default CommitteeDashboard;
