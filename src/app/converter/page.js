"use client";

import React from "react";
import styles from "./converter.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import Axios from "axios";

export default function Converter() {
  const [from, setFrom] = useState("btc");
  const [to, setTo] = useState("usd");
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // getting information from our api
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((response) => {
      setInfo(response.data[from]);
    });
  }, [from]);

  // function to convert
  function convert() {
    let rate = info[to];
    setOutput(input * rate);
  }

  // function to switch between currencies
  function swap() {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }
  // call convert() if user swaps between currencies
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <h1>If you be the cash, I'll be the rubber band!</h1>
        <h1>Oh-ooh-oh, oh-ooh-oh, </h1>
        <h1> oh (You Converter babe!)</h1>
      </div>
      <div>
        <div>
          <h3>Amount</h3>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <h3>From</h3>
          <Dropdown
            className={styles.dropdown}
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />
        </div>
        <div className={styles.swap}>
          <button className={styles.button} onClick={() => swap()}>
            Switch
          </button>
        </div>
        <div>
          <h3>To</h3>
          <Dropdown
            className={styles.dropdown}
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="To"
          />
        </div>
        <button className={styles.button} onClick={() => convert()}>
          Convert
        </button>
        <div className={styles.result}>
          <p>{input + " " + from + " = " + output.toFixed(3) + " " + to}</p>
        </div>
      </div>
      <footer className={styles.footer}>
        <Link href="/">Get back 😑</Link>
      </footer>
    </main>
  );
}
