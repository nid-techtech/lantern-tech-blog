---
title: Character Vendor System
description: A system that stores and pushes out character parts.
author: Sugawara Tsumugi
twoColumn: true

ogImage: https://i.imgur.com/Swn0ONT.png
---

# Piston Arm Design

---

## PistonArm-1

`2025/06/05`

Began development of a piston arm using a crank mechanism.

Issues such as interference between arms and stiff movement due to overly tight fitting were discovered.

![CAD Screenshot](https://i.imgur.com/BVzy4jB.png)

![Sketch](https://i.imgur.com/AjCZtsl.jpeg)

---

## Prototype

`2025/06/05`

The actual printed version.

The movement is too stiff, and the arms interfere with each other, making it unusable.

However, the basic design was carried over to the final version, and its simple structure makes it a very easy-to-handle mechanism.

![Prototype](https://i.imgur.com/UkP1SP7.jpeg)

---

## PistonArm-2

`2025/06/06`

The axle fitting was made slightly looser for smoother movement.

Additionally, extending some parts alleviated the interference issue.

However, the arm base became prone to breaking.

![Sketch](https://i.imgur.com/NNZrNEN.jpeg)

---

## PistonArm-3

`2025/06/06`

Improved strength by adding fillets to the base.

The extrusion length also matched the design.

This version will be adopted, and the main body will be designed to accommodate it.

![CAD Screenshot](https://i.imgur.com/BW4iGEq.png)

![Sketch](https://i.imgur.com/GgVFKNi.jpeg)

---

# Vendor Main Unit

---

## Vendor-1

`2025/06/27`

Designed an extrusion mechanism based on the PistonArm.

The design prioritized quick and accurate production via 3D printing and easy assembly (to meet the presentation deadline and to replace defective parts through re-production).

In practice, it was a somewhat forced design; extrusion was impossible without the upper spare alphabet storage tube (cartridge), and subsequent letters sometimes dropped or didn't. However, for a rapidly developed prototype, it was an excellent achievement, so this version was slightly improved and used for the pre-exhibition.

A particularly critical issue was the very low success rate of printing each part. This was due to printing tall objects somewhat forcibly, and these problems significantly influenced the policy for vendor development after the pre-exhibition.

![Sketch](https://i.imgur.com/tx6IyuP.jpeg)

![CAD Screenshot](https://i.imgur.com/4C6nnmo.png)

---

## Prototyping Vendor-1

`2025/06/30`

Prototyped Vendor-1 by incorporating a servo motor and crankshaft.

The cartridge slot was blocked with paper.

![Prototype in action](https://i.imgur.com/qL6s7eo.gif)

---

## Mass Production for Pre-Exhibition

`2025/07/01`

Mass-produced Vendor-1 for use in the pre-exhibition.

![During Assembly](https://i.imgur.com/5WRGWXc.jpeg)

---

## Vendor-2

`2025/07/17`

Designed Vendor-2 by improving Vendor-1, which was used in the pre-exhibition.

As the display method changed and the letter size was reduced from 6cm to 4cm, PistonArm-4 was newly designed to solve all issues.

By pre-arranging servo motors in CAD, accurate designs could be achieved without relying on estimation. Additionally, leveraging knowledge from previous snap-fit assemblies, parts that were previously in two pieces were broken down into three, reducing the risk of printing errors.

Both the round rod for the arm section and the tubes for the letters conform to the 4mm standard, allowing the tubes to theoretically be infinitely extended using joints.

![CAD Screenshot](https://i.imgur.com/Swn0ONT.png)

---

## Mass Production of Vendor-2

`2025/07/17`

Mid-way through, it was discovered that the arm design was not as intended, so it was re-printed.

By standardizing parts properly, the number of wasted parts was minimized.

![During design correction](https://i.imgur.com/78sRP5Q.jpeg)

![Print queue submitted](https://i.imgur.com/1CNNgbA.jpeg)

---

# Peripheral Parts

---

## Painting the Cartridge Casing

`2025/07/20`

Painting the outside of the cartridge black with acrylic paint.

![Sugawara painting](https://i.imgur.com/4J09Kux.jpeg)

---

## Servo Motor Cables

`2025/07/21`

To make wiring a large number of servo motors a little easier, we're making daisy chain cables.

13x2 systems each for 5V power and GND wires. This reduces the total of 52 power and GND wires (3 wires per servo motor) down to 4. However, this increases the power capacity, so a more powerful power adapter is needed.

Simultaneously, we're building a keyboard that can only type alphabetical characters. An ISO layout keyboard was somehow lying around at home, so it was sacrificed for the cause.

![Ofuchi soldering](https://i.imgur.com/SIeCoXC.jpeg)

![Ukai making a keyboard](https://i.imgur.com/zMniAZG.jpeg)

![Keyboard with non-alphabetical keys blackened](https://i.imgur.com/PWKysuo.jpeg)

---

## Repainting

`2025/07/21`

Applying another coat to eliminate unevenness in the black paint.

What is Ukai doing...?

![Looks like fun](https://i.imgur.com/gyCPrLz.jpeg)

---

## Wiring Hell

`2025/07/22`

Just before the main exhibition. Connecting wires to the servo motors.

Even though daisy chain cables were made, they only reduce the number of power and GND wires. Signal wires still need to be connected to all 26 channels. Each one is connected to the Arduino Mega's GPIO.

This is daunting~~~

![Go, Ukai!](https://i.imgur.com/NhqT1SG.jpeg)

---

## Painting the Lid

`2025/07/22`

Painting the cartridge lid, which was suddenly added, black.

By the way, the Bambu Lab A1 mini prints incredibly fast and is very reliable.

![Go, Sugawara!](https://i.imgur.com/B7df89Y.jpeg)

---