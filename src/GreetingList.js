import React from "react";

export default function GreetingList() {
  const greetings = ["Hello", "Hi", "Good Morning", "Good Evening"];
  const users = ["adam1", "eve1", "aditya09", "sana"];

  return (
    <section className="greeting-section">
      {users.map((user, i) => (
        <div key={user} className="greeting-item">
          {greetings[i % greetings.length]} {user}
        </div>
      ))}
    </section>
  );
}
