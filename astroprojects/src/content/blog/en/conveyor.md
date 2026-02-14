---
title: Conveyor
description: Design and production of conveyor to transport character parts
author: Ofuchi Rin
twoColumn: true

ogImage: https://i.imgur.com/CtgtfPT.jpeg
---

# Conveyor v1

---

## Conveyor Design Begins

`2025/06/03`

Immediately after the division of labor was decided, we created the frame using wood from TECH☆TECH's past works that was scheduled for dismantling and disposal.

Then, we determined the general design policy and purchased bearings and rubber sheets.

![Sketch](https://i.imgur.com/DsX4nJf.jpeg)

----

## Shafts Purchased

`2025/06/12`

Because we had already purchased bearings, we needed to buy φ10 shafts. However, aluminum pipes were only available in φ9 or φ12, so we had to look for an alternative.

In the lumber section, we found a φ10x1820mm Hiba round bar, which we decided to use.

![Hiba Round Bar](https://i.imgur.com/smggcB0.jpeg)

---

## Assembly Begins

`2025/06/14`

We designed and printed a considerably large roller shaft with an outer diameter of φ900 (excluding the flange).

It takes more than 5 hours to print one. We made effective use of our time by printing multiple units after university closing hours.

![CAD Screenshot](https://i.imgur.com/qSd3xRQ.png)

---

## Assembly Continues

`2025/06/15`

Assembly continued. We repurposed Tamiya's gearbox and tank (track) chassis set, implementing a structure where a timing chain synchronizes the movement of the drive wheels.

Due to the increased size of the shafts, the gap at the connection point between the two conveyor units became too wide, causing character parts to fall off. Therefore, we decided to use smaller φ35 shafts only for the connection points.

Power is supplied by two D-size batteries providing 3V.

![Drive Shaft Operation](https://i.imgur.com/L9LQaY9.gif)

![Shaft Placement Image](https://i.imgur.com/KiZ0t7G.jpeg)

---

## v1 Completed

`2025/06/16`

The additional rubber sheets were delivered, and final assembly was completed.

Each rubber sheet was 1000mm long, and several sheets were connected with a large number of staplers and vinyl tape. Sugawara helped with the electrical wiring.

Upon testing it, several issues arose:

- Since the rubber sheets were connected manually, they couldn't be made perfectly straight. Also, because the assembly, from the frame to the shaft fixation, was done with rough measurements, the tension applied was uneven.

- As a result, during continuous operation, the belt gradually drifted toward the outside of the shaft. While the flanges on the end shafts prevented complete deviation, it was simply concerning.

- The gearbox produced a loud noise. We want to try adding lubricant (like KURE556) to see how it changes.

- The spacing between the shafts was quite wide (290mm apart), causing significant sagging when an object was placed on it.

- The sprocket slipped off the gearbox shaft and spun idly. Pushing it back with a finger worked, but it would slip out again after a while.

Nevertheless, we succeeded in completing a conveyor that could actually transport objects (characters). It was quite enjoyable to watch, despite the noise.

At the interim presentation on June 17th, no particular issues were mentioned other than the noisy gears.

![Belt secured with numerous staples](https://i.imgur.com/06IEkn2.jpeg)

![v1 Overall](https://i.imgur.com/L3nHrVi.jpeg)

![Operation Status](https://i.imgur.com/TkPs45S.gif)

---

# Conveyor v2

---

## Spec Review for v2

`2025/06/18`

To achieve stability, I believe it would be best to make the roller shafts smaller and increase their number, as shown in the accompanying image.

Additionally, we are considering a new design, including using Nema17 stepper motors as new motors and employing crowned shafts to prevent belt deviation.

![I want to achieve this structure](https://i.imgur.com/BSM28Cg.jpeg)

---

## v2 Production Starts

`2025/06/19`

With the general direction established, we have begun actual production. We are also ordering new motors. Ultimately, we decided against using Nema17.

The roller shaft configuration will be:

- Outer diameter φ34-40, crowned shape, with bearings and flanges (both ends, driven)

- Outer diameter φ34, straight, without bearings, with flanges (regularly placed guides)

- Outer diameter φ34, straight, with bearings, without flanges (for tension control)

- Outer diameter φ18, straight, without bearings or flanges (for support, commonly called "chikuwa")

These will be combined as appropriate. Compared to ver.1, this is a significant downsizing and allows for a slimmer design, but since the number of shafts has greatly increased, I don't think it will lead to cost reduction. It's simply more work.

Also, as the shaft spacing becomes narrower, we will design new bearing housings. Previously, we used four screws to fix one shaft, but with a substantial increase in shafts, maintaining the same screw ratio would be inefficient. So, we will design it so that five shafts can be fixed with eight screws, effectively increasing efficiency by 2.5 times.

![New shafts being printed](https://i.imgur.com/N834RUM.gif)

![CAD screenshot](https://i.imgur.com/b1gElvH.png)

---

## v2 Continued

`2025/06/22`

Assembled a large quantity of printed parts.

However, we simply didn't have enough. Also, some parts were from an older version. Printing takes time, so we should calculate beforehand what parts and quantities are needed (a lesson learned).

I'll be running a large print run at the university again overnight. As always, I just hope there are no issues that stop the print midway.

![Many parts](https://i.imgur.com/mXNfM4r.jpeg)

![Printing in progress](https://i.imgur.com/PqaiFmk.gif)

---

## v2 Nearing Completion

`2025/06/23`

Even after all that printing, counting again reveals insufficient parts. How long do we have to keep this up?

The answer is, simply put, until it operates stably.

So, to continue. Despite some issues like a misdesign in the new power unit and problems with the 3D printer, we managed to install almost all parts into the longer frame (the power unit is not yet installed).

During bearing installation, I accidentally hit my index finger, causing a bruise. Everyone, please be careful.

The accompanying images show Watanabe (a TECH☆TECH member) pressing bearings and shafts into place, taking over for the injured Obuchi.

![Many shafts](https://i.imgur.com/bX3xp21.jpeg)

![Pressing in the shafts](https://i.imgur.com/y61a0lK.gif)

---

## v2 Failure

`2025/06/24`

The consequences of rushing to complete it without identifying and resolving various issues have come back to haunt us.

- It was discovered that the newly ordered small geared motor lacked sufficient rotational torque due to its small size.

- We hastily reverted to the Tamiya gearbox, which also has its own problems (sprockets slipping and freewheeling, noisy, takes up too much space).

- Belt deviation, the biggest challenge from ver.1, has not improved; in fact, it has become more pronounced.

- Particularly in the power unit, belt deviation causes the belt to get pinched between the timing chain and the gear.

Therefore, ver.2 is unusable as is. In fact, it's worse than ver.1 in that it can't even perform its basic function of transporting objects properly.

We will proceed with creating ver.2.1, retaining the basic design but significantly changing various aspects of the design.

![Motor lacking torque](https://i.imgur.com/cDRDuFH.gif)

![New parts being printed](https://i.imgur.com/6U5Lkw5.jpeg)

---

# Conveyor v2.x

---

## Towards v2.1

`2025/06/25`

Changes from ver.2 include:

- Significantly enlarged flanges to prevent belt deviation.

- Integrated the bearing connect (connection part with front and rear modules) and bearing power (power part where the motor is installed) into a single unit.

- Reduced the number of high-tension roller shafts throughout the conveyor to decrease friction and save necessary rotational torque.

- After much deliberation, decided to use Nema17 motors (Arduino controlled).

Additionally, due to schedule management, for the pre-exhibition on July 1st, only a portion of the conveyor module will be prepared and used (only 800mm out of a provisional total length of 2.5m). This is because the low number of parts makes it robust against recovery from malfunctions.

My personal trash bag is filled with an overwhelming number of old, no-longer-used 3D printed parts. It's a shame, but it can't be helped...

![CAD Screenshot](https://i.imgur.com/mDOomrH.png)

![NEMA17 Motor](https://i.imgur.com/GH8pxAU.gif)

---

## v2.1 complete, but...

`2025/06/27`

Ver.2.1 has been completed, but there are fundamental problems.

- The contact area between the drive shaft and the belt is insufficient, causing slippage.

- Wrapping double-sided tape around it had no effect.

- Applying strong tension to achieve sufficient friction simply resulted in insufficient torque.

Therefore, we decided to transition to ver.2.2, which moves the drive shaft to the end and places motors on both ends (dual motor setup).

Incidentally, participating in HeboCon 25 around this time led to an insane schedule. We were on the verge of breaking down, but managed to overcome it with the help of TECH☆TECH members.

This image shows us struggling because it wasn't working properly an hour before the bus departed for Tokyo.

![Before bus departure](https://i.imgur.com/4Vv5Vj9.jpeg)

![Troubled](https://i.imgur.com/FMHRakR.jpeg)

---

## v2.2 complete

`2025/07/03`

By placing the drive shaft at the end, tension can be applied more efficiently, resulting in stable operation. This is a relief.

Also, two tactile switches were connected to the control system, allowing for manual bidirectional operation. This was simply added for operational testing, but it amusingly evolved into something that could be used for the exhibition (see [Overall Status](/en/blog/integrate) for details).

![Conveyor v2.2](https://i.imgur.com/HBsTL7Q.png)

![Video recording for video presentation](https://i.imgur.com/rvULE7A.gif)

![Bidirectional operation](https://i.imgur.com/L4dZAeN.gif)

---

# Let's Make It Black

---

## Starting to Print Black Parts

`2025/07/14`

To make the white letters stand out, enhance the overall unity of the work, and ensure contrast with the background, I decided to unify all component parts in black.

The filaments available for free in the prototyping room are only white. I ordered 2kg of Bambu Lab's genuine PLA Basic filament (black) to print the roller shafts. It will take time since I can't run multiple machines in parallel as usual.

![Thank you Amazon Prime Day](https://i.imgur.com/kUJJXLt.png)

![Starting to print black parts](https://i.imgur.com/B0BrA7j.jpeg)

---

## Continuing Black Part Printing

`2025/07/19`

Once the roller shafts are finished printing, the next step is to print the bearing housings.

I'll also print sprockets and washers.

(Print completion notification sounds)

![Printing bearing housings](https://i.imgur.com/FgnTBBl.jpeg)

![Printing complete](https://i.imgur.com/BV0Evpy.gif)

---

## Black Conveyor Completed

`2025/07/20`

It's finished. Ukai painted the wooden frame for me, and I want you to see it. Its beauty is captivating (self-praise). It's almost like the iPhone 7's Jet Black (?).

Operation is smooth. There are no new issues arising from the black parts, so I consider the conveyor main unit (ver.2.2-B) complete. Obuchi will now move on to miscellaneous tasks such as document creation and exhibit equipment kitting.

I'll hand over the Arduino coding to drive the conveyor to Ukai. Thanks!

![Completed Black Conveyor](https://i.imgur.com/CtgtfPT.jpeg)

---