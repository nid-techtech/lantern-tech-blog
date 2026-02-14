---
title: Software
description: Unity and Arduino communication
author: Ukai Kohei / Sugawara Tsumugi
twoColumn: true

ogImage: https://i.imgur.com/rvXl2u3.png
---

## Integrating Arduino and Unity

`2025/06/04`

Enabled communication between Arduino and Unity using serial communication.

Due to the serial port connection, a large volume of information cannot be transmitted.

![Arduino sketch](https://i.imgur.com/vV35c4C.png)

---

## UI Design

`2025/06/26`

Input is now provisionally enabled.

The text box is positioned above the underscore.

![Unity screenshot](https://i.imgur.com/lvc3Ecq.png)

---

## Stepper Motor Control

`2025/07/17`

Wrote a program to move a stepper motor left and right based on characters sent from Unity.

Normal operation is not yet guaranteed.

![Ukai at work](https://i.imgur.com/rIb9Kbb.jpeg)

---

## UI Design 2

`2025/07/21`

Simplified the UI.

Characters are now typed on a plain black screen.

![Unity screenshot](https://i.imgur.com/kj29eXa.png)

---

## Stepper Motor Control 2

`2025/07/25`

Wrote a program to calculate the distance between characters and move the conveyor accordingly.

It seems capable of moving approximately 6cm in 100 steps.

![Conveyor operation status](https://i.imgur.com/qtYBe6n.gif)

---

## Servo Motor Control

`2025/07/25`

Characters are sent one by one from Unity to Arduino, and Arduino processes them sequentially.

Unity is upstream, and Arduino is downstream in this setup.

Arduino cannot send data, but Unity can.

![Arduino sketch](https://i.imgur.com/sATuDKX.png)

---

## Conveyor and Vending Machine Linkage (Exhibition Version)

`2025/07/25`

Unity sends an alphabet character every 10 seconds.

Upon reception, the following actions occur:

Move conveyor → Place character.

Since Unity sends data at fixed 10-second intervals, there is a considerable delay between inputting a character and it actually starting to move, as well as between the first and second characters. This was chosen because controlling the character sending interval stably was deemed technically difficult before the presentation.

Therefore, we decided to wait for a duration that ensures the most time-consuming operation (time to dispense a character + A→Z or Z→A movement time) can be completed successfully.

The functionality is implemented, but the waiting time is excessively long and should be improved for an experiential exhibit.

![Arduino sketch](https://i.imgur.com/rvXl2u3.png)

---

## Open Campus Program

`2025/07/26`

Unity sends characters at n-second intervals, depending on the character distance.

By changing the order to "Place character → Move conveyor," it became possible to introduce optimal intervals for movement between each character, achieving considerably smoother operation. While not the theoretical fastest, it allows for highly optimized movements within the range of stable operation.

![Operation during Open Campus](https://i.imgur.com/Ue7lenN.gif)

---