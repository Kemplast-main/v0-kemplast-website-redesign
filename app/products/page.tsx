"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { PartnersSection } from "@/components/partners-section";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/* ------------------ MAIN CATEGORIES ------------------ */
const categories = [
  { id: "all", name: "All Products" },
  { id: "pressure", name: "Pressure Instruments" },
  { id: "level", name: "Level Instruments" },
  { id: "flow", name: "Flow Instruments" },
  { id: "temperature", name: "Temperature Instruments" },
  { id: "safety", name: "Safety Instruments" },
  { id: "valve", name: "Valve Positioners" },
  { id: "insulation", name: "Insulation Products" },
  { id: "packing", name: "Packing Products" },
  { id: "plc", name: "Siemens PLC Components" },
];

/* ------------------ SUB CATEGORIES ------------------ */
const subCategoriesMap: Record<string, { id: string; name: string }[]> = {
  pressure: [
    { id: "all", name: "All Pressure Instruments" },
    { id: "gauge", name: "Pressure Gauge" },
    { id: "transmitter", name: "Pressure Transmitters" },
  ],

  level: [
    { id: "all", name: "All Level Instruments" },
    { id: "ultra-sonic", name: "Ultrasonic Level" },
    { id: "radar", name: "Radar Level" },
    { id: "switches", name: "Level Switches" },
  ],

  packing: [
    { id: "all", name: "All Packing Products" },
    { id: "fibre", name: "Fibre Packing Sheets" },
    { id: "gland", name: "Gland Packings" },
    { id: "flange", name: "Flange Gaskets" },
    { id: "ceramic", name: "Ceramic Packing" },
    { id: "ptfe", name: "PTFE Components" },
  ],

  plc: [
    { id: "all", name: "All PLC Components" },
    { id: "basic", name: "Basic Controllers" },
    { id: "advanced", name: "Advanced Controllers" },
    { id: "distributed", name: "Distributed Systems" },
    { id: "hmi", name: "HMI Systems" },
    { id: "power", name: "Power Supplies" },
  ],
};

/* ------------------ PRODUCT DETAILS TYPE ------------------ */
interface ProductDetail {
  name: string;
  category: string;
  subCategory?: string;
  image: string;
  description?: string;
  introduction?: string;

  technicalSpecs?: Record<string, string>;
  benefits?: string[];
  applications?: string[];
  imageFit?: "cover" | "contain";
}

/* ------------------ PRODUCT DETAILS MAP ------------------ */
const productDetailsMap: Record<string, ProductDetail> = {
  "Pencil Type Pressure Transmitter": {
    name: "Pencil Type Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/pencil.jpeg",
    introduction:
      "A Pencil Type Pressure Transmitter is a narrow-diameter pressure sensor designed for environments where space is limited and precise pressure measurement is needed. The term 'pencil type' refers to its slim, elongated cylindrical shape.",
    benefits: [
      "High measuring accuracy",
      "Compact design",
      "High overload withstand capability",
      "Rugged stainless-steel enclosure",
      "For aggressive and non-aggressive media",
      "For measuring the pressure of liquids, gases and vapors",
    ],
    technicalSpecs: {
      "Measuring principle":
        "Piezoresistive measuring cell (stainless steel diaphragm)",
      "Power supply": "24V DC",
      Output:
        "4 to 20 mA output current, a DC 0 to 10 V output voltage or an IO-Link output signal",
      "Measuring range": "100 mbar to 1000 bar",
      "Process connection": "NPT, BSP & Metric thread connections",
      "Area of classification": "with or without Ex ia",
      Nonlinearity: "≤ 0,25 %",
      "Long-term stability": "≤ 0,25% / 12 Months",
    },
    applications: [
      "Mechanical engineering",
      "Shipbuilding",
      "Power engineering",
      "Chemical industry",
      "Water supply",
    ],
  },
  "Gauge Pressure Transmitter": {
    name: "Gauge Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/gauge-pressure.png",
    introduction:
      "The Siemens SITRANS P320 is the first pressure transmitter on the market to feature remote safety handling. The instruments' remote safety handling via SIMATIC PDM saves time during SIL commissioning: rather than manually attending to each individual device across a facility.",
    technicalSpecs: {
      Technology: "Piezo-Resistive type sensor",
      Communication: "HART (4…20 mA), PROFIBUS PA & FOUNDATION Fieldbus (FF)",
      "Measuring range":
        "10 mbar to 700 bar (various capsule ranges available)",
      "Measuring cell filling": "Silicone oil, Inert liquid & Neobee oil",
      "Process Connection":
        "NPT, BSP, Metric thread & with Flange connections (various sizes)",
      "Wetted parts":
        "Diaphragm- SS 316L/1.4404, Alloy C276/2.4819, Tantalum, Monel & Gold plated",
      "Transmitter enclosure":
        "Die-cast aluminum housing with polyurethane or epoxy coating & SS housing",
      Approval:
        "ATEX (Europe), IECEx (World), CSA (Canada), FM (USA), PESO (India), EACEx (GOST-R, -K, -B), INMETRO (Brazil), KCs (Korea), NEPSI (China), ECASEx (Emirates) & UKEX (United Kingdom)",
      Enclosure: "Dual chamber device",
      "Local operation/display": "With or without display",
      Accuracy: "0.04 % & 0.075 %",
      "Response time": "down to 105 ms",
      "Long-Term Stability": "≤ 0.125 % / 5 years",
      Accessories:
        "Mounting brackets, Manifolds, tag plates & Flange connection (if required)",
    },
  },
  "Absolute Pressure Transmitter": {
    name: "Absolute Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/absolute-pressure.png",
    introduction:
      "The SITRANS P320 absolute pressure transmitter measures absolute pressure of corrosive and non-corrosive gases, vapors and liquids with infinitely adjustable measuring span. For SITRANS P320/P420 with HART: 8.3 mbar a to 160 bar a (0.12 to 2 321 psi a)",
    technicalSpecs: {
      Technology: "Piezo-Resistive type sensor",
      Communication: "HART (4…20 mA), PROFIBUS PA & FOUNDATION Fieldbus (FF)",
      "Measuring range":
        "10 mbar to 700 bar (various capsule ranges available)",
      "Measuring cell filling": "Silicone oil, Inert liquid & Neobee oil",
      "Process Connection":
        "NPT, BSP, Metric thread & with Flange connections (various sizes)",
      "Wetted parts":
        "Diaphragm: SS 316L/1.4404, Alloy C276/2.4819, Tantalum, Monel & Gold plated",
      "Transmitter enclosure":
        "Die-cast aluminum housing with polyurethane or epoxy coating & SS housing",
      Approval:
        "ATEX (Europe), IECEx (World), CSA (Canada), FM (USA), PESO (India), EACEx (GOST-R, -K, -B), INMETRO (Brazil), KCs (Korea), NEPSI (China), ECASEx (Emirates) & UKEX (United Kingdom)",
      Enclosure: "Dual chamber device",
      "Local operation/display": "With or without display",
      Accuracy: "0.04 % & 0.075 %",
      "Response time": "down to 105 ms",
      "Long-Term Stability": "≤ 0.125 % / 5 years",
      Accessories:
        "Mounting brackets, Manifolds, tag plates & Flange connection (if required)",
    },
  },
  "Differential Pressure Transmitter": {
    name: "Differential Pressure Transmitter",
    category: "pressure",
    subCategory: "transmitter",
    image: "/differential.jpeg",
    introduction: "",
    description: "",
    benefits: [
      "SIL-certified with NAMUR NE107 diagnostics for high safety",
      "Fast response time with low conformity and temperature errors",
      "Excellent long-term stability and high reliability in harsh environments",
      "Corrosion-resistant materials suitable for aggressive media",
      "Easy parameterization via HART/local buttons and simple maintenance",
      "Wide adjustable measurement span for diverse applications",
    ],
    technicalSpecs: {
      Technology: "Piezo-Resistive type sensor",
      Communication: "HART (4…20 mA), PROFIBUS PA & FOUNDATION Fieldbus (FF)",
      "Measuring range":
        "10 mbar to 160 bar (various capsule ranges available)",
      "Measuring cell filling": "Silicone oil, Inert liquid & Neobee oil",
      "Process Connection": '¼" NPT & with flange connections (various sizes)',
      "Wetted parts":
        "Diaphragm: SS 316L/1.4404, Alloy C276/2.4819, Tantalum, Monel & Gold plated",
      "Transmitter enclosure":
        "Die-cast aluminum housing with polyurethane or epoxy coating & SS housing",
      Approval:
        "ATEX (Europe), IECEx (World), CSA (Canada), FM (USA), PESO (India), EACEx (GOST-R, -K, -B), INMETRO (Brazil), KCs (Korea), NEPSI (China), ECASEx (Emirates) & UKEX (United Kingdom)",
      Enclosure: "Dual chamber device",
      "Local operation/display": "With or without display",
      Accuracy: "0.04 % & 0.075 %",
      "Response time": "down to 105 ms",
      "Long-Term Stability": "≤ 0.125 % / 5 years",
      Accessories:
        "Mounting brackets, Manifolds, tag plates & Flange connection (if required)",
    },
    applications: [
      "Filtration Plants",
      "Hydraulic & Lubrication Systems",
      "Waste Water",
      "Boiler Drum Level",
      "Cooling Tower",
      "Power Plants industries",
    ],
  },
  "Pressure Gauge": {
    name: "Pressure Gauge",
    category: "pressure",
    subCategory: "gauge",
    image: "/industrial-pressure-gauge.jpg",
    introduction:
      "Pressure gauges are used to measure pressures in hydraulic systems and it is made in accordance to EN 837-1 European standards. Measuring pressure on equipment is essential for monitoring and providing the smooth functioning and operating safety of the plant. Pressure gauges are a group of devices that measure and display fluid pressure levels enclosed vessels or systems in the process. Pressure is measurement of the amount of force applied over a specific unit area.",
  },
  "Differential Pressure Gauge": {
    name: "Differential Pressure Gauge",
    category: "pressure",
    subCategory: "gauge",
    image: "/differential-gauge.jpg",
    introduction:
      "A Differential Pressure Gauge is used to measure the difference in pressure between two points. It is commonly used in applications where monitoring this difference is critical to ensure proper operation, such as in filters, pumps, and flow systems.",
    technicalSpecs: {
      "Dial sizes": "100 mm / 150 mm / 200 mm",
      "Pressure ranges": "0–400 mmWC to 6000 mmWC / 0–1 kg/cm² up to 25 kg/cm²",
      "Max static pressure": "25 bar up to 60 bar",
      "Diaphragm material": "SS316 / Spring Steel",
      "Mounting type": "Bottom or Back Mounted",
    },
    applications: [
      "Pharmaceutical",
      "Chemical",
      "Petrochemical",
      "Oil & Gas",
      "Refinery",
      "Paper & Pulp",
      "Sugar",
      "Breweries",
      "Food & Beverages",
      "Cement Industries",
    ],
  },

  // level products
  "ECHOMAX XPS-10, XPS-15 & XPS-30": {
    name: "ECHOMAX XPS-10, XPS-15 & XPS-30",
    category: "level",
    subCategory: "ultra-sonic",
    image: "/images/level%20images/EchoMax%20XPS-10,%20XPS-15%20&%20XPS-30.jpg",
    introduction:
      "EchoMax XPS transducers use ultrasonic technology to measure level in a wide range of liquids and solids. XPS transducers can be fully immersed, are resistant to steam and corrosive chemicals, and can be installed without flanges. The XPS series offers versions for various measuring ranges up to 30m (100 ft) and up to a max. temperature of 95 °C (203 °F). During operation, the EchoMax transducers emit acoustic pulses in a narrow beam. The level monitor measures the propagation time between pulse emission and its reflection (echo) to calculate the distance.",
    technicalSpecs: {
      "Measuring Range": "0 to 30 M",
      "Frequency (XPS-10/XPS-15)": "44 kHz",
      "Frequency (XPS-30)": "30 kHz",
      "Beam Angle (XPS-10)": "12°",
      "Beam Angle (XPS-15/XPS-30)": "6°",
      Output: "4–20 mA, HART, Modbus, etc.",
      "Power Supply": "Operation of transducer",
      "Process Temperature": "-40°C to 85°C (depending on model)",
      Mounting: "Top of the tank (NPT & BSP threaded/flanged connections)",
      "Material of Construction": "PVDF, PVDF with CPVC flange",
      "Degree of Protection": "IP66/68",
      Approvals: "CE, UKCA, CSA, FM, ATEX, UKEX, IEC Ex, NEPSI, CRN, VLAREM II",
    },
    benefits: [
      "Integral temperature compensation",
      "Low ringing effect reduces blanking distance",
      "Optional foam facing for dusty applications",
      "Self-cleaning and low-maintenance",
      "Chemically resistant",
      "Hermetically sealed",
    ],
    applications: [
      "Wet Wells",
      "Flumes",
      "Weirs",
      "Filter Beds",
      "Chemical Storage Tanks",
      "Wastewater Treatment Plants",
      "Marine Environments",
    ],
  },

  "SITRANS PROBE LU240": {
    name: "SITRANS PROBE LU240",
    category: "level",
    subCategory: "ultra-sonic",
    image: "/images/level%20images/SITRANS-Probe%20LU240.png",
    introduction:
      "SITRANS Probe LU240 is an ultrasonic level transmitter ideal for level, volume, and volume flow measurements. It works with liquids, slurries, and bulk materials up to 12 m (40 ft). The range of SITRANS Probe LU240 is 3, 6, or 12 m (10, 20, or 40 ft). Probe LU240 provides unmatched reliability, using Process Intelligence, Auto False Echo Suppression for fixed obstruction avoidance, and accuracy of 0.15% of range or 6 mm (0.25 inch) (on 6 m and 12 m models only). SITRANS Probe LU240 offers HART communication on certain models and mA output on all models. SITRANS mobile IQ is a Bluetooth app that provides an intuitive interface to quickly configure, set up, and monitor SITRANS Probe LU240 series (available for Android, Apple, and Windows devices).",
    technicalSpecs: {
      "Measuring Range": "0-12 m",
      "Beam Angle": "10°",
      Frequency: "54 kHz",
      Outputs: "4–20 mA/HART",
      "Power Supply": "24V DC",
      "Ambient Temperature": "-40 to +80 °C (-40 to +176 °F)",
      "Material (Enclosure)": "PBT (Polybutylene Terephthalate)",
      "Material (Transducer)": "PVDF (Polyvinylidene Fluoride)",
      "Process Connection": "NPT, BSP Threaded & with flange connection",
      "Cable Inlet": "Metric or NPT Threaded",
      "Degree of Protection": "Type 4X, Type 6, IP66, IP68",
      Accuracy: "± 0.0096 mA",
      Memory: "Non-volatile EEPROM, no battery required",
      Approvals:
        "FM, CCSAUS, CE, UKCA, RCM, EAC, KC, VLAREM II, ATEX, UKEX, IECEx, INMETRO, NEPSI, SABS, EAC & KCs",
    },
    benefits: [
      "Continuous level measurement up to 12 m (40 ft) range",
      "Easy installation and simple startup",
      "Programming using 4-button HMI or SIMATIC PDM",
      "Communication using HART",
      "ETFE or PVDF transducers for chemical compatibility",
      "Process Intelligence signal processing",
      "Auto False Echo Suppression for fixed obstruction avoidance",
      "Low power and current startup",
      "Optional Bluetooth configuration and monitoring via SITRANS mobile IQ",
    ],
    applications: [
      "Chemical storage vessels",
      "Filter beds",
      "Liquid storage vessels",
    ],
  },
  "SIEMENS LR100 SERIES": {
    name: "SIEMENS LR100 SERIES",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SIEMENS-LR100%20SERIES.png",
    introduction:
      "SITRANS LR100 series are a W band FMCW radar level transmitter with a chemically resistant PVDF sensor for years of trouble-free, reliable measurement service. 4 to 20 mA loop powered with HART, providing accurate level measurement to ranges of 30 m. Measurement is possible non-intrusively through plastic vessel tops for easy installation. Programming is convenient using the Bluetooth connection and SITRANS mobile IQ application on your smart device or locally with an optional HMI. This radar level transmitter can stand up to 80°C temperature and -1 to 3 bar pressure, which is suitable for basic storage applications.",
  },
  "SITRANS LR100": {
    name: "SITRANS LR100",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR100.png",
    introduction:
      "SITRANS LR100 is a 2 wire loop powered radar transmitter for continuous level measurement of liquids and slurries to a range of 8 m (26 ft). It is suitable for basic storage tanks and it's cost effective.",
    technicalSpecs: {
      Type: "Remote version with 8 m cable",
      "Bluetooth Enabled": "Yes",
      Range: "0-8 m (26 ft)",
      Frequency: "80 GHz nominal",
      "Beam Angle": "8°",
      "Performance Accuracy": "± 5 mm",
      Temperature: "-40 to +60°C",
      "Degree of Protection": "IP66/IP68",
      "Process Connection": "NPT, BSP & Flange connections",
      "Output/Communication": "4–20 mA",
      "Power Supply": "12–35 V DC Loop powered",
      Approvals: "General Purpose CE, CSA, FM, RCM",
    },
  },
  "SITRANS LR110": {
    name: "SITRANS LR110 ",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR110.png",
    introduction:
      "SITRANS LR110 is a compact radar transmitter for continuous level measurement of liquids, slurries, and solids to a range of 15 m (49.2 ft).",
    technicalSpecs: {
      Type: "Remote version with different length of cable",
      "Bluetooth Enabled": "Yes",
      Range: "0-15 m (0-49.2 ft)",
      Frequency: "80 GHz nominal",
      "Beam Angle": "8°",
      "Performance Accuracy": "± 2 mm",
      Temperature: "-40 to +80°C",
      "Degree of Protection": "IP66/IP68",
      "Process Connection": "NPT, BSP & Flange connections",
      "Output/Communication": "4–20 mA/HART/Modbus RTU",
      "Power Supply": "12–35 V DC Loop powered",
      Approvals:
        "General Purpose CE, CSA, FM, RCM, Hazardous ATEX, IECEx, CE, CSA, FM, RCM",
    },
  },

  "SITRANS LR120": {
    name: "SITRANS LR120 ",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR120.png",
    introduction:
      "SITRANS LR120 is a compact radar level transmitter designed for continuous level measurement of liquids and solids with a measuring range up to 30 meters.",

    technicalSpecs: {
      Type: "Remote version with different cable lengths",
      "Measuring range": "0–30 m (0–98.4 ft)",
      Frequency: "80 GHz nominal",
      "Beam angle": "4°",
      "Performance accuracy": "± 2 mm",
      Temperature: "-40 to +80 °C",
      "Degree of protection": "IP66 / IP68",
      "Process connection": "NPT, BSP & Flange connections",
      "Output / communication": "4–20 mA / HART / Modbus RTU",
      "Power supply": "12–35 V DC (loop powered)",
      Approvals:
        "General Purpose CE, CSA, FM, RCM and Hazardous Area approvals including ATEX and IECEx",
    },
  },

  "SITRANS LR140": {
    name: "SITRANS LR140 ",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR140.png",
    introduction:
      "SITRANS LR140 is a two-wire loop-powered radar level transmitter designed for continuous level measurement of liquids and slurries in basic storage tanks, offering a cost-effective solution.",

    technicalSpecs: {
      Type: "Integral version without display",
      "Measuring range": "0–8 m (0–26 ft)",
      Frequency: "80 GHz nominal",
      "Beam angle": "8°",
      "Performance accuracy": "± 5 mm",
      Temperature: "-40 to +60 °C",
      "Degree of protection": "IP66 / IP67",
      "Process connection": "NPT, BSP & Flange connections",
      "Output / communication": "4–20 mA",
      "Power supply": "12–35 V DC (loop powered)",
      Approvals: "General Purpose CE, CSA, FM, RCM",
    },
  },

  "SITRANS LR150": {
    name: "SITRANS LR150 compact ",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS%20LR150.png",
    introduction:
      "SITRANS LR150 is a compact W-band FMCW radar level transmitter for continuous level measurement of liquids, slurries, and solids up to 15 meters, offering reliable non-intrusive measurement with optional HMI and Bluetooth configuration.",

    benefits: [
      "Bluetooth connectivity using SITRANS mobile IQ",
      "Chemically resistant PVDF sensor enclosure",
      "HART 7.0 or Modbus RTU communication",
      "W-band FMCW radar with narrow beam angle",
      "Suitable for open-air applications outside tanks",
      "High accuracy of ±2 mm",
      "Zero near-range distance for inventory control",
      "Submergence shield accessory for flooding conditions",
      "Hazardous area variants available",
      "Optional HMI with pushbutton programming",
      "Compact design for limited installation space",
    ],

    technicalSpecs: {
      Type: "Integral version with optional display",
      "Measuring range": "0–15 m (0–49.2 ft)",
      Frequency: "80 GHz nominal",
      "Beam angle": "8°",
      "Performance accuracy": "± 2 mm",
      Temperature: "-40 to +80 °C",
      "Degree of protection": "IP66 / IP67",
      "Process connection": "NPT, BSP & Flange connections",
      "Output / communication": "4–20 mA / HART",
      "Power supply": "12–35 V DC (loop powered)",
      Approvals:
        "CE, CSA, FM, RCM, ATEX, IECEx (General Purpose & Hazardous Area)",
    },

    applications: [
      "Liquid level measurement",
      "Solid level measurement",
      "Slurry level measurement",
      "Volume flow applications",
      "Storage tanks and vessels",
      "Mining industry",
      "Aeronautics industry",
      "Boiler engineering",
      "Bore digging technology",
      "Paper and pulp industry",
    ],
  },

  "SIEMENS LR500 SERIES": {
    name: "SIEMENS LR500 SERIES",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SIEMENS%20LR500%20SERIES.png",
    introduction:
      "SITRANS LR500 series are 80 GHz radar level transmitters designed for continuous level monitoring of liquids, slurries, and solids in storage and process vessels, including applications involving high temperature and pressure, with measurement ranges up to 120 meters.",

    benefits: [
      "80 GHz radar technology with narrow and focused beam",
      "Accurate and repeatable measurement on low dielectric media",
      "Fast measurement response for process control applications",
      "Reduced sensitivity to internal obstructions",
      "Smaller antenna size due to high-frequency operation",
      "Graphical local user interface for easy setup and operation",
      "Quick Start Wizard for simplified commissioning",
      "Echo profile display for diagnostic and troubleshooting support",
      "Suitable for high temperature and high pressure applications",
    ],

    technicalSpecs: {
      Technology: "Radar (80 GHz)",
      "Measuring range": "Up to 120 m (393 ft)",
      "Antenna options":
        "Threaded lens antenna, Flanged encapsulated antenna, Polymeric horn antenna, Flanged lens antenna",
    },

    applications: [
      "Liquid level measurement",
      "Slurry level measurement",
      "Solid level measurement",
      "Storage vessels",
      "Process vessels",
      "High temperature applications",
      "High pressure applications",
      "Process control systems",
    ],
  },

  "SITRANS LR510": {
    name: "SITRANS LR510 ",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR510.png",
    introduction:
      "SITRANS LR510 is a radar level transmitter with a threaded lens antenna designed for continuous monitoring of liquids, including corrosive liquids, and slurries up to a range of 30 meters. The small process connection makes it ideal for applications with challenging mounting conditions.",

    technicalSpecs: {
      Type: "Threaded lens antenna for liquids",
      Frequency: "W-band radar (80 GHz nominal)",
      "Minimum detectable distance":
        "0 mm from end of the antenna (antenna dependent, reference conditions)",
      "Measuring range": "0–30 m (0–98 ft)",
      "Maximum measured error": "1 mm (0.039 inch)",
      Output: "4–20 mA / HART",
      "Power supply": "24 V DC",
      "Wetted materials": "316L or C22 Alloy, FKM or FFKM seal, PEEK lens",
      "Process connection":
        'NPT & BSP threaded connections (¾\", 1\", or 1½\")',
      "Process pressure": "Maximum 40 bar (depending on temperature)",
      "Process temperature": "-40 °C to +250 °C (depending on seal type)",
      "Second line of defense": "Available",
      "Beam angle": '¾\": 14°, 1\": 10°, 1½\": 7° / 10°',
      "Enclosure material":
        "Aluminum, polyester powder-coated (C5 corrosion equivalent)",
      "Cable inlet": '2 × M20 × 1.5 or 2 × ½\" NPT',
      "Degree of protection": "Type 4X, Type 6, IP66, IP68",
      "Local display":
        "Optional graphical HMI with NE107 diagnostic data, echo profile display and backlight",
      "Trend logging": "Built-in",
      Approvals:
        "General Purpose CE, ATEX, IECEx, CSA, FM, UKEX, NEPSI, PESO, INMETRO",
    },
  },

  "SITRANS LR530": {
    name: "SITRANS LR530",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR530.png",
    introduction:
      "SITRANS LR530 is a radar level transmitter with a flanged encapsulated antenna designed for continuous monitoring of liquids and slurries up to a range of 120 meters. The PTFE lens with integrated gasket allows easy cleaning and makes it suitable for highly corrosive media.",

    technicalSpecs: {
      Type: "Flanged encapsulated antenna for extreme conditions",
      Frequency: "W-band radar (80 GHz nominal)",
      "Minimum detectable distance":
        "0 mm from end of the antenna (antenna dependent, reference conditions)",
      "Measuring range": "0–120 m (0–394 ft)",
      "Maximum measured error": "1 mm (0.039 inch)",
      Output: "4–20 mA / HART",
      "Power supply": "24 V DC",
      "Wetted materials": "PTFE lens with integral gasket",
      "Process connection": 'Flanged connection from 1\" / DN25 to 8\" / DN200',
      "Process pressure": "Maximum 25 bar (depending on temperature)",
      "Process temperature": "-196 °C to +200 °C (depending on seal type)",
      "Second line of defense": "Available",
      "Beam angle": '1\" / DN25: 10°, 2\" / DN50: 6°, 3\" / DN80 or larger: 3°',
      "Enclosure material":
        "Aluminum, polyester powder-coated (C5 corrosion equivalent)",
      "Cable inlet": '2 × M20 × 1.5 or 2 × ½\" NPT',
      "Degree of protection": "Type 4X, Type 6, IP66, IP68",
      "Local display":
        "Optional graphical HMI with NE107 diagnostic data, echo profile display and backlight",
      "Trend logging": "Built-in",
      Approvals:
        "General Purpose CE, ATEX, IECEx, CSA, FM, UKEX, NEPSI, PESO, INMETRO",
    },
  },

  "SITRANS LR550": {
    name: "SITRANS LR550",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR550.png",
    introduction:
      "SITRANS LR550 is a radar level transmitter with a polymeric horn antenna designed for continuous monitoring of solids and liquids up to a range of 120 meters. Its lightweight construction makes it suitable for open-air applications, inventory measurement in silos and vessels, and river level monitoring.",

    technicalSpecs: {
      Type: "Polymeric horn antenna for solids and liquids",
      Frequency: "W-band radar (80 GHz nominal)",
      "Minimum detectable distance":
        "0 mm from end of the antenna (antenna dependent, reference conditions)",
      "Measuring range": "0–120 m (0–394 ft)",
      "Maximum measured error": "1 mm (0.039 inch)",
      Output: "4–20 mA / HART",
      "Power supply": "24 V DC",
      "Wetted materials": "PP with FKM or EPDM sealing",
      "Process connection":
        'Open air installation or flanged connections from 3" / DN80 to 8" / DN200',
      "Process pressure": "Maximum 2 bar",
      "Process temperature": "-40 °C to +80 °C",
      "Beam angle": "3°",
      "Air purge connection": "Optionally available",
      "Enclosure material":
        "Aluminum, polyester powder-coated (C5 corrosion equivalent)",
      "Cable inlet": '2 × M20 × 1.5 or 2 × ½\" NPT',
      "Degree of protection": "Type 4X, Type 6, IP66, IP68",
      "Local display":
        "Optional graphical HMI with NE107 diagnostic data, echo profile display and backlight",
      "Trend logging": "Built-in",
      Approvals:
        "General Purpose CE, ATEX, IECEx, CSA, FM, UKEX, NEPSI, PESO, INMETRO",
    },
  },

  "SITRANS LR580": {
    name: "SITRANS LR580",
    category: "level",
    subCategory: "radar",
    image: "/images/level%20images/SITRANS-LR580.png",
    introduction:
      "SITRANS LR580 is an 80 GHz radar level transmitter with a lens antenna for continuous measurement of solids and liquids up to 120 meters. It features an integrated aiming flange and air purge connection, making it ideal for silo inventory measurement and high-temperature applications in cement and power industries.",

    technicalSpecs: {
      Type: "Lens antenna with integrated aiming flange for solids",
      Frequency: "W-band radar (80 GHz nominal)",
      "Minimum detectable distance":
        "0 mm from end of antenna (antenna dependent, reference conditions)",
      "Measuring range": "0–120 m (0–394 ft)",
      "Maximum measured error": "1 mm (0.039 inch)",
      Output: "4–20 mA / HART",
      "Power supply": "24 V DC",
      "Wetted materials": "316L with FKM or FFKM seal, PEEK lens",
      "Process connection": '3\" / DN80 to 6\" / DN150',
      "Process pressure": "Maximum 3 bar",
      "Process temperature": "-40 °C to +250 °C (depending on seal type)",
      "Second line of defense": "Available",
      "Beam angle": "3°",
      "Air purge connection": "Integrated",
      "Enclosure material":
        "Aluminum, polyester powder-coated (C5 corrosion equivalent)",
      "Cable inlet": '2 × M20 × 1.5 or 2 × ½\" NPT',
      "Degree of protection": "Type 4X, Type 6, IP66, IP68",
      "Local display":
        "Optional graphical HMI with NE107 diagnostics, echo profile display, and backlight",
      "Trend logging": "Built-in",
      Approvals: "CE, ATEX, IECEx, CSA, FM, UKEX, NEPSI, PESO, INMETRO",
    },

    benefits: [
      "Continuous level measurement up to 120 m",
      "Simple installation and fast commissioning",
      "Configuration via 4-button HMI, Bluetooth mobile IQ app, or SIMATIC PDM",
      "IQ Guard health monitoring with NE107 diagnostics",
      "HART 7 communication for process integration",
      "Graphical HMI with echo profile display and backlight",
      "Near Range Suppression for material buildup noise elimination",
      "Advanced process intelligence signal processing",
      "High accuracy of 1 mm in accordance with IEC 60770-1",
      "Suitable for API 2350 overfill prevention applications",
      "Automatic false echo suppression for fixed obstructions",
      "Low power consumption with environmental product declaration (EPD)",
      "Optional second line of defense (SLOD) for toxic material safety",
      "Up to 100,000 data points for trend logging and process optimization",
    ],

    applications: [
      "Liquid level measurement",
      "Solid level measurement",
      "Acids and caustic liquids",
      "Hydrocarbon-based liquids",
      "Edible oils and asphalt cement",
      "Paper pulp and slurries",
      "Molten metals and liquified gases",
      "Grain and agricultural materials",
      "Cement, lime, and sand",
      "Plastic pellets and powders",
      "Fly ash, sugar, and flour",
      "Animal feed and wood pellets",
      "Ore and hot mix asphalt",
      "Silo inventory management",
      "Cement industry applications",
      "Power industry applications",
    ],
  },

  "CAPACITANCE SWITCHES": {
    name: "CAPACITANCE SWITCHES",
    category: "level",
    subCategory: "switches",
    image: "/images/level%20images/capacitance-switch.png",
    introduction:
      "Capacitance switches, also known as capacitive level switches, are electronic devices used to detect the presence or absence of liquids, solids, or slurries. They operate by sensing changes in capacitance that occur when process material with a different dielectric constant than air comes into contact with or approaches the probe.",

    technicalSpecs: {
      Principle: "Capacitance-based level detection",
      Types:
        "Compact version, extended rod version, and extended cable version",
      Version: "Rod and cable type",
      "Maximum length": "Rod up to 5.5 m, cable up to 30 m",
      "Process temperature": "-40 °C to +200 °C, HT version up to +400 °C",
      "Process pressure": "Up to 35 bar(g)",
    },

    benefits: [
      "Easy installation with no field adjustment required",
      "Low maintenance due to absence of moving parts",
      "Highly visible 360-degree status indication",
      "M12 connector for quick and easy electrical connection",
      "Optional IO-Link communication for advanced monitoring and configuration",
    ],
  },

  "VIBRATING SWITCHES": {
    name: "VIBRATING SWITCHES",
    category: "level",
    subCategory: "switches",
    image: "/images/level%20images/vibrating%20switches.png",
    introduction:
      "Vibrating level switches are compact devices used for point level detection in liquids, slurries, and solids. They operate using a piezoelectric-driven vibrating fork or rod that changes its vibration frequency when material comes into contact, triggering a switching signal. These switches are reliable, maintenance-free, and ideal for confined space installations and critical level detection applications.",

    technicalSpecs: {
      Principle: "Piezoelectric-driven vibrating fork or rod",
      Types:
        "Compact version, extended rod version, and extended cable version",
      Version: "Rod and cable type",
      "Insertion length": "Rod: 40 mm to 4 m, Cable: up to 20 m",
      "Process temperature":
        "-40 °C to +150 °C, HT version from -196 °C to +450 °C",
      "Process pressure": "-1 to +160 bar",
    },

    benefits: [
      "Proven vibrating level switch technology for liquids",
      "Compact insertion length of 40 mm for confined space applications",
      "Fault monitoring for corrosion, loss of vibration, or line break to piezo drive",
      "Functional Safety SIL 2 compliant according to IEC 61508 and IEC 61511",
      "Hygienic process connections and suitable for API 2350 applications",
      "Optional remote test signal conditioner",
      "High resistance to mechanical forces",
      "Strong vibration resistance under high bulk material loads",
      "Rotatable enclosure for convenient wiring",
      "Suitable for low-density materials down to 5 g/l with low-density option",
      "Custom extensions available up to 20,000 mm",
      "Durable short fork option with 165 mm insertion length",
    ],
  },

  "ROTATION PADDLE SWITCHES": {
    name: "ROTATION PADDLE SWITCHES",
    category: "level",
    subCategory: "switches",
    image: "/images/level%20images/rotating%20paddle%20switches.png",
    introduction:
      "Rotary paddle switches, also known as rotating paddle level switches, are electromechanical devices used for point level detection of dry bulk solids. They detect high, low, or intermediate material levels in silos, hoppers, and bins by sensing resistance to paddle rotation when material is present. These switches are suitable for a wide range of bulk solids such as grains, powders, cement, pellets, plastic granules, and wood chips.",

    technicalSpecs: {
      Principle: "Electromechanical rotating paddle level detection",
      Version: "Rod and cable type",
      "Maximum length": "Rod up to 4 m, cable up to 10 m",
      "Process temperature": "Up to 600 °C (1,112 °F)",
      "Process pressure": "Up to 10 bar",
      "Minimum bulk density":
        "15.06 g/l with optional rectangular vane, 100 g/l with standard vane",
    },

    benefits: [
      "Proven rotary paddle switch technology for bulk solids",
      "High-integrity mechanical seal for reliable operation",
      "Universal power supply options available",
      "Unique friction clutch mechanism prevents damage from falling material",
      "Rotatable enclosure for convenient wiring",
      "Optional paddles for low-density material detection",
      "Small paddle design allows installation through existing process connections",
      "High-temperature model available",
      "Optional extension kits for increased insertion length",
      "Optional fail-safe configuration detects loss of rotation",
      "Functional Safety SIL 2 compliant according to IEC 61508 and IEC 61511",
    ],
  },

  "ULTRASONIC NON-CONTACTING SWITCHES": {
    name: "ULTRASONIC NON-CONTACTING SWITCHES",
    category: "level",
    subCategory: "switches",
    image: "/images/level%20images/ULTRASONIC%20NON-CONTACTING%20SWITCH.png",
    introduction:
      "An ultrasonic non-contacting switch is a point level sensor that uses high-frequency sound waves to detect the presence or absence of liquids, slurries, or bulk solids without physical contact. It is ideal for harsh, corrosive, or sanitary environments where contacting sensors may suffer from contamination, buildup, or mechanical wear. The rugged, all-in-one design combines the transducer and electronics in a maintenance-free device with no moving parts.",

    technicalSpecs: {
      "Maximum measuring range":
        "Up to 5 m for liquids and slurries, up to 3 m for bulk solids",
      "Beam angle": "12°",
      "Process temperature": "-40 °C to +60 °C (-40 °F to +140 °F)",
      "Process pressure": "Up to 10 bar",
      "Transducer material": "ETFE or PVDF copolymer",
      Enclosure: "Polycarbonate, Type 6 / NEMA 6 / IP67",
    },

    benefits: [
      "Non-contact measurement eliminates material buildup on the sensor",
      "Two switch outputs for high-high, high, low, and low-low level alarms",
      "Suitable for pump up and pump down control applications",
      "Integral temperature compensation for reliable measurement",
      "AC or DC power supply options available",
      "Fail-safe electronics for increased operational safety",
      "Threaded and sanitary clamp process connections",
      "Rugged enclosure suitable for harsh environments",
      "Easy configuration using simple two-button programming",
      "Virtually maintenance-free operation with no moving parts",
    ],

    applications: [
      "Liquids (conductive and non-conductive)",
      "Slurries and bulk solids",
      "Food and beverage applications such as milk, oil, and syrup tanks",
      "Chemical industry applications involving acidic or corrosive liquids",
      "Pharmaceutical processes with powders and solvents",
      "Plastics industry for resin pellets and powders",
      "Wastewater treatment including foam detection and oil-water interface level",
    ],
  },

  // flow products
  "ELECTROMAGNETIC FLOWMETER": {
    name: "ELECTROMAGNETIC FLOWMETER",
    category: "flow",
    image: "/images/flow%20images/ELECTROMAGNETIC%20FLOWMETER.png",
    introduction:
      "An electromagnetic flowmeter measures the flow rate of electrically conductive liquids using Faraday’s Law of electromagnetic induction. When a conductive fluid passes through a magnetic field, a voltage proportional to the flow velocity is generated and converted into a flow signal. These flowmeters are widely used for accurate and reliable flow measurement in industrial applications.",

    technicalSpecs: {
      Application: "Electrically conductive liquids, slurries, and pastes",
      "Available sizes": "DN2 to DN2000",
      "Liner materials":
        "NBR, EPDM, PTFE/PFA, natural rubber, ceramic (application dependent)",
      "Electrode materials":
        "Stainless steel, Hastelloy, Titanium, Tantalum, Platinum",
      "Process connection": "Flanged or wafer type",
      "Flange standards": "EN 1092-1, ANSI B16.5, AWWA C-207 Class D, JIS",
      Mounting: "Integral or remote (up to 200 m)",
      "Power supply": "230 V AC, 24 V DC, or battery operated with GSM",
      Accuracy: "±0.2 % of flow rate",
      "Process temperature": "Up to 150 °C (depending on liner)",
      Output:
        "4–20 mA, pulse, digital output, HART, Modbus RTU/RS485, PROFIBUS PA/DP, PROFINET, Ethernet/IP, GSM/GPRS",
      "Degree of protection": "IP67 / IP68",
    },

    benefits: [
      "No moving parts resulting in low maintenance",
      "High accuracy for conductive liquids",
      "Unaffected by pressure, temperature, density, or viscosity",
      "Suitable for corrosive and dirty fluids",
      "Rugged fully welded construction for harsh environments",
      "Easy commissioning with automatic parameter recognition",
      "Supports in-situ verification without process interruption",
    ],

    applications: [
      "Water and wastewater treatment",
      "Chemical industry",
      "Pharmaceutical industry",
      "Food and beverage industry",
      "Mining, aggregates, and cement industry",
      "Pulp and paper industry",
      "Steel industry",
      "Power, utility, and chilled water systems",
    ],
  },

  "VORTEX FLOWMETER": {
    name: "VORTEX FLOWMETER",
    category: "flow",
    image: "/images/flow%20images/VORTEX%20FLOWMETER.png",
    introduction:
      "A vortex flowmeter measures the flow of liquids, gases, and steam using the vortex shedding principle. It is highly accurate, reliable, and unaffected by changes in conductivity, viscosity, temperature, or pressure. These flowmeters are widely used in industrial utility and auxiliary systems, particularly for steam, gas, and energy monitoring applications.",

    technicalSpecs: {
      Application: "Liquids, gases, and steam",
      "Available sizes": "DN15 to DN300",
      "Wetted parts": "SS316L and Alloy C",
      "Process connection": "Flanged or wafer type",
      "Flange standards": "EN 1092-1, ANSI B16.5",
      Mounting: "Integral or remote type",
      "Power supply": "24 V DC",
      Accuracy: "± 1.0 % of measured value",
      "Process temperature": "-40 °C to +240 °C",
      Output: "4–20 mA, HART, PROFIBUS PA, FOUNDATION Fieldbus",
      "Degree of protection": "IP67 / IP68",
      Approvals: "SIL 2 / SIL 3, safe and hazardous areas",
      Compensation: "Integrated pressure and temperature compensation",
    },

    benefits: [
      "Suitable for liquids, gases, and saturated or superheated steam",
      "Integrated pressure and temperature compensation for improved accuracy",
      "High measurement accuracy and repeatability",
      "Maintenance-free sensor with no moving parts",
      "Fully welded stainless-steel construction for harsh environments",
      "SIL 2 certified according to IEC 61508",
      "Approved for use in hazardous areas",
      "Space-saving installation with wide measuring range",
      "Supports energy and steam monitoring applications",
      "Remote electronics option with cable length up to 50 m",
    ],

    applications: [
      "Chemical and petrochemical industries",
      "Oil and gas industry",
      "Power plants and steam boilers",
      "Food and beverage industry",
      "Pulp and paper industry",
      "Water and wastewater treatment",
      "Compressed air systems",
      "Industrial gas consumption monitoring",
    ],
  },

  "TURBINE FLOWMETER": {
    name: "TURBINE FLOWMETER",
    category: "flow",
    image: "/images/flow%20images/turbine.png",
    introduction:
      "A turbine flowmeter measures the flow of liquids and gases by converting the kinetic energy of the flowing medium into rotational motion of a turbine rotor. The rotor speed is directly proportional to the flow rate and is detected by a pickup coil, producing an electrical signal that represents flow rate and totalized flow. These meters are known for high accuracy, reliability, and suitability for hygienic and general industrial applications.",

    technicalSpecs: {
      Fluid: "Clear liquids and gases",
      "Line size": "15 NB to 200 NB",
      "Design pressure": "Up to 25 kg/cm²",
      "Design temperature": "Up to 110 °C",
      "Material options": "SS304, SS304L, SS316, SS316L",
      Connection:
        "Flanged (ASA, BS, DIN, Triclover) or screwed BSP / NPT (M/F)",
      "Power supply": "220 VAC or 24 V DC",
      Output: "4–20 mA, HART, RS485 (Modbus)",
      "Relay output": "Batcher",
      Accuracy: "±1 % of FSD (±0.5 % on request)",
      Protection: "IP66, Ex-proof (optional IP68)",
    },

    benefits: [
      "High accuracy and repeatability",
      "Wide flow measurement range",
      "Compact and lightweight construction",
      "Easy installation and low maintenance",
      "Cost-effective flow measurement solution",
      "Suitable for both liquids and gases",
      "Minimal pressure drop",
      "Direct digital output for easy system integration",
    ],

    applications: [
      "Chemical industry",
      "Petrochemical industry",
      "Oil and gas industry",
      "Power plants",
      "Food and beverage industry",
      "Pulp and paper industry",
      "Water and wastewater treatment",
    ],
  },

  "ORIFICE TYPE DP FLOW METER": {
    name: "ORIFICE TYPE DP FLOW METER",
    category: "flow",
    image: "/images/flow%20images/orifice%20tube.png",
    introduction:
      "An orifice type differential pressure (DP) flow transmitter measures fluid flow by creating a pressure drop across an orifice plate installed in a pipeline. The resulting differential pressure is measured by a transmitter and converted into a standardized electrical signal, such as 4–20 mA, proportional to the flow rate. This method is widely used due to its simplicity, reliability, and compliance with international standards.",

    technicalSpecs: {
      "Orifice plate mounting":
        "Between flanges using carrier rings or RJ plate holders",
      Standards: "AGA / ASME, ISO, BS, DIN (as per requirement)",
      Flangematerials:
        "Carbon steel, ASTM A105, ASTM A182, ASTM A350, SS304, SS304L, SS316, SS316L, PP, PTFE",
      "Orifice plate materials":
        "SS304, SS304L, SS316, SS316L, Monel, Hastelloy, PP, PTFE (other materials on request)",
      "Studs and nuts": "MS, SS, ASTM A193 Gr. B7, ASTM A194 Gr. 2H",
      Gaskets:
        "Spiral wound, CAF, PTFE, AF120 (other specifications available on request)",
    },

    benefits: [
      "Cost-effective flow measurement solution",
      "Simple and robust design",
      "Easy installation and maintenance",
      "Suitable for liquids, gases, and steam",
      "Reliable option for large pipeline flow measurement",
    ],
  },

  "PITOT TUBE TYPE DP FLOW METER": {
    name: "PITOT TUBE TYPE DP FLOW METER",
    category: "flow",
    image: "/images/flow%20images/pitot%20tube.png",
    introduction:
      "A pitot tube type differential pressure (DP) flow meter measures fluid velocity by comparing stagnation pressure and static pressure in a flowing medium. The resulting differential pressure is used to determine flow velocity and flow rate. This method is widely used for air, gas, and liquid flow measurement in ducts, stacks, pipelines, and open or closed channels.",

    technicalSpecs: {
      Measurement: "Differential pressure-based velocity measurement",
      Output: "Linear or square root output selectable",
      Signal:
        "Direct interface with control system (no external A/D or D/A converter required)",
      Sensor:
        "Piezo-resistive sensor with temperature and pressure compensation",
      Display: "Programmable engineering units",
    },

    benefits: [
      "Point velocity measurement for detailed flow analysis",
      "Lower pressure loss compared to orifice plate flow meters",
      "Hot tapping capability allows installation without process shutdown",
      "Suitable for air, gas, and liquid flow measurement",
      "No moving parts resulting in minimal maintenance",
      "Widely used in industrial and engineering applications",
    ],

    applications: [
      "Chemical industry",
      "Petrochemical industry",
      "Oil and gas industry",
      "Power plants",
      "Food and beverage industry",
      "Pulp and paper industry",
      "Water and wastewater treatment",
    ],
  },
  // temperature products
  "RESISTANCE TEMPERATURE DETECTORS": {
    name: "RESISTANCE TEMPERATURE DETECTORS ",
    category: "temperature",
    image: "/images/temp-images/resistance-temperature-detectors.png",
    introduction:
      "Resistance Temperature Detectors (RTDs) measure temperature by correlating the change in electrical resistance of a metal, typically platinum, with temperature. As temperature increases, the resistance of the sensing element increases in a predictable manner, enabling accurate and stable temperature measurement over a wide range.",

    technicalSpecs: {
      "Temperature range": "-200 °C to +850 °C",
      Elements: "Pt100, Pt500, Pt1000",
      "Element type": "Simplex or duplex",
      "Head types":
        "Compact, sanitary, weatherproof, Ex-proof, or without head",
      "Process connection":
        "NPT / BSP, adjustable, nipple or nipple-union connections",
      "Process connection material":
        "Stainless steel 304, stainless steel 316, carbon steel zinc coated",
      Sheath:
        "SS316, optional SS316L, SS321, Inconel 600, SS316 with PTFE coating",
      Head: "Aluminum epoxy coated, SS304, SS316, PP",
      "Wiring configuration": "2-wire, 3-wire, or 4-wire",
      "Electrical connection":
        "NPT(F) standard, others on request (sanitary head: M16 × 1)",
    },

    benefits: [
      "High measurement accuracy",
      "Excellent long-term stability",
      "Repeatable and reliable temperature readings",
      "Wide temperature measurement range",
      "Suitable for critical and precision temperature applications",
    ],
  },

  THERMOCOUPLES: {
    name: "THERMOCOUPLES",
    category: "temperature",
    image: "/images/temp-images/thermocouples.jpg",
    introduction:
      "Thermocouples measure temperature based on the voltage generated when two dissimilar metals are joined at one end and exposed to temperature changes. The generated voltage varies with temperature, allowing measurement over a very wide range with fast response and robust performance.",

    technicalSpecs: {
      "Temperature range": "-200 °C to +1750 °C",
      Elements: "J, K, T, E, N, R, S, B (others on request)",
      "Element type": "Simplex or duplex",
      Junction: "Grounded or ungrounded",
      "Head types":
        "Compact, sanitary, weatherproof, Ex-proof, or without head",
      "Process connection":
        "NPT / BSP, adjustable, nipple or nipple-union connections",
      "Process connection material":
        "Stainless steel 304, stainless steel 316, carbon steel zinc coated",
      Sheath:
        "SS316, optional SS316L, SS321, SS310, SS446, Inconel 600, Incoloy 800",
      Head: "Aluminum epoxy coated, SS304, SS316, PP",
      "Electrical connection": "NPT(F) standard, others on request",
    },

    benefits: [
      "Wide temperature measurement range",
      "Fast response time",
      "Rugged construction for harsh environments",
      "Suitable for high-temperature applications",
      "Simple and proven temperature sensing technology",
    ],
  },

  "HEAD MOUNTED TRANSMITTERS": {
    name: "HEAD MOUNTED TRANSMITTERS",
    category: "temperature",
    image: "/images/temp-images/head-mount.png",
    introduction:
      "Head mounted transmitters are compact two-wire temperature transmitters designed for RTDs and thermocouples. They convert sensor signals into a standardized 4–20 mA output proportional to temperature. Their compact design allows installation directly inside DIN connection heads, providing a cost-effective and reliable solution for industrial temperature measurement, with optional isolation, HART communication, and explosion protection.",

    technicalSpecs: {
      "Measured variable": "Temperature",
      Input: "Universal input for RTD and thermocouple sensors",
      "Connection type": "2-wire, 3-wire, or 4-wire",
      Communication: "4–20 mA (2-wire), HART (4–20 mA), PROFIBUS PA",
      "RTD measuring range": "-200 °C to +850 °C (-328 °F to +1562 °F)",
      "Thermocouple measuring range": "25 °C to +1050 °C (77 °F to +1922 °F)",
      Units: "°C or °F",
      "Noise rejection": "50 Hz and 60 Hz",
      "Output signal": "4–20 mA, 2-wire",
      "Damping time": "0 to 30 s (default 0 s)",
      Protection: "Reverse polarity protection",
      "Explosion protection":
        "ATEX, IECEx, EACEx, CSA, FM, NEPSI, INMETRO, UKEX",
    },

    benefits: [
      "Compact design suitable for mounting inside sensor connection heads",
      "Flexible mounting with center hole for easy installation",
      "Galvanic isolation for signal safety",
      "Test terminals for easy current measurement",
      "LED diagnostics for device status indication",
      "Input monitoring for wire break and short circuit detection",
      "Self-monitoring functionality",
      "Configuration data stored in EEPROM",
      "SIL 2 / SIL 3 capable (with order option)",
      "Advanced diagnostics including operating hours counter",
      "High electromagnetic compatibility according to DIN EN 61326 and NE21",
    ],

    applications: [
      "Process industries such as chemical, oil and gas, and food and beverage",
      "HVAC systems",
      "Power plants",
      "Water and wastewater treatment facilities",
    ],
  },

  "FIELD MOUNT TEMPERATURE TRANSMITTER": {
    name: "FIELD MOUNT TEMPERATURE TRANSMITTER",
    category: "temperature",
    image: "/images/temp-images/field-mount.png",
    introduction:
      "A field mount temperature transmitter is used in industrial applications to measure temperature and transmit the signal to control systems such as PLCs or DCS. It converts input signals from RTDs or thermocouples into standardized outputs like 4–20 mA or HART, enabling accurate and reliable temperature measurement over long distances. The rugged field-mounted design allows installation directly at the measurement point.",

    technicalSpecs: {
      "Measured variable": "Temperature",
      Input: "RTD (Pt100, etc.) and thermocouple (J, K, T, etc.)",
      "Input channels": "Single or dual input",
      "Connection type": "2-wire, 3-wire, or 4-wire",
      "Output signal": "4–20 mA, 2-wire",
      Communication: "With or without HART",
      "Cold junction compensation": "With or without CJC",
      "Transmitter housing":
        "Die-cast aluminum with polyurethane coating or stainless steel housing",
      Enclosure: "Single chamber or dual chamber",
      "Electrical connection": "NPT or metric threaded",
      Display: "With or without LCD",
      "Noise rejection": "50 Hz and 60 Hz",
      "Power supply": "24 V DC",
      Approvals: "ATEX, IECEx, FM, PESO, NEPSI",
    },

    benefits: [
      "Universal temperature transmitter for RTDs and thermocouples",
      "Galvanic isolation for improved signal safety",
      "Local operation via display or external control keys",
      "Rugged single or dual chamber enclosure options",
      "Isolated electronic and terminal compartments in dual chamber design",
      "High degree of protection IP66 / IP68",
      "Excellent electromagnetic compatibility as per EN 61326 and NE21",
      "Test terminals for output signal measurement without loop interruption",
      "Suitable for remote installations and difficult-to-access measuring points",
      "Designed for high temperature and vibration-prone environments",
      "Suitable for hazardous area installations",
      "SIL 2 / SIL 3 capable according to IEC 61508 (with order option)",
    ],

    applications: [
      "Oil and gas industry",
      "Chemical plants",
      "Power generation facilities",
      "Food and beverage industry",
      "Pharmaceutical processing",
    ],
  },

  "RAIL MOUNT TEMPERATURE TRANSMITTER": {
    name: "RAIL MOUNT TEMPERATURE TRANSMITTER",
    category: "temperature",
    image: "/images/temp-images/rail-mount.png",
    introduction:
      "A rail mount temperature transmitter is designed for DIN rail installation inside control panels and cabinets. It converts signals from temperature sensors such as RTDs and thermocouples into standardized output signals like 4–20 mA or HART for use in automation and control systems. Its compact design allows space-saving installation and easy integration into centralized control architectures.",

    technicalSpecs: {
      "Measured variable": "Temperature / resistance",
      Input:
        "RTDs, thermocouples, resistance-based sensors, potentiometers, DC voltage sources",
      "Input channels": "Single or dual input",
      Connection: "2-wire, 3-wire, or 4-wire",
      Units: "°C or °F",
      "Sensor factor": "0.25 to 10 (adaptation of base sensor type)",
      "Response time": "250 ms for one sensor with break monitoring",
      "Output signal": "4–20 mA, 2-wire with HART communication",
      "Error signal (NE43)": "3.6 to 23 mA (default 22.8 mA, adjustable)",
      Accuracy: "< 0.025 % of measuring span",
      "Ambient temperature": "-40 °C to +85 °C",
      Protection: "Reverse polarity protection",
      "Explosion protection":
        "ATEX, IECEx, EACEx, CSA, FM, NEPSI, INMETRO, UKEX",
    },

    benefits: [
      "Compact DIN rail design for space-saving panel installation",
      "Universal input for multiple temperature and resistance sensors",
      "Galvanic isolation for improved signal integrity",
      "Integrated test terminals for current measurement",
      "LED diagnostics for quick device status indication",
      "Input monitoring for wire break and short circuit detection",
      "Self-monitoring with configuration stored in EEPROM",
      "Advanced diagnostic functions including operating hours counter",
      "High electromagnetic compatibility according to EN 61326 and NE21",
      "SIL 2 / SIL 3 capable according to IEC 61508 (with order option)",
    ],

    applications: [
      "Chemical industry",
      "Food manufacturing",
      "Power engineering",
      "Pharmaceutical industry",
      "Petrochemical industry",
      "Basic material industry",
      "Biotechnology",
    ],
  },

  // Valve Products
  "Control Valve": {
    name: "Control Valve",
    category: "valve",
    subCategory: "all",
    image: "/placeholder.svg?height=400&width=400",
    introduction: "Industrial control valve for flow regulation",
    description: "Precision control valve system",
  },
  "Relief Valve": {
    name: "Relief Valve",
    category: "valve",
    subCategory: "all",
    image: "/placeholder.svg?height=400&width=400",
    introduction: "Pressure relief valve for system protection",
    description: "Safety relief valve solution",
  },

  //safety products
  "Safety Relief Valve": {
    name: "Safety Relief Valve",
    category: "safety",
    subCategory: "all",
    image: "/srv.png",
    introduction:
      "The Safety Relief valves are spring-loaded closed bonnet and designed as per API standards. We machine the valves from solid bar to have better material compatibility. The Safety valves are designed in soft seat as well as metal to metal seat. The valves are pressure tested with Nitrogen. The valves provide highly effective solution for various industrial applications in Refineries, Chemicals, Pharmaceutical, Fertilizers, Storage tanks systems etc.",
    benefits: [
      'Size: From 1/2" to 4"',
      "End Connection: Flanged/Threaded/TC End",
      "Spring loaded, closed bonnet safety relief valve",
      "MOC: SS 316, 304, CS, PTFE coating & other on request",
      "Design compliance as per ASME & API",
      "Manufactured from bar stock and casting",
      "Applications: Steam, Air, Vapour, Liquid, Oil, Hydrogen Gas & many more",
    ],
  },
  "Inline Flame Arrestor": {
    name: "Inline Flame Arrestor",
    category: "safety",
    subCategory: "all",
    image: "/arrestor.png",
    introduction:
      "Protect your operations with our In-Line Flame Arrestor, designed for maximum safety and reliability. This advanced device effectively stops flames from traveling through pipelines while allowing normal gas flow. With ATEX certification and a durable design, our flame arrestors seamlessly integrate into your existing systems. Plus, we offer customized options to meet your specific needs, ensuring peace of mind in handling flammable materials.",
    benefits: [
      "Reliable Flame Suppression",
      "Seamless Integration",
      "Robust Design & Comprehensive Testing",
      "Perfect finish & Easy Cleaning",
    ],
  },
  "End of Line Flame Arrestor": {
    name: "End of Line Flame Arrestor",
    category: "safety",
    subCategory: "all",
    image: "/endofline.png",
    introduction:
      "Our End of Line Flame Arrestors provide critical protection by preventing flame propagation in pipelines. Designed for reliable performance, these devices allow safe gas flow while effectively stopping flames at the end of your system. With durable construction and ATEX certification, our flame Arrestor are built to enhance safety in hazardous environments.",
    benefits: [
      "Optimized Flow Dynamics",
      "Low Lifecycle Cost",
      "Robust Design & Comprehensive Testing",
      "Sturdiness & Low maintenance",
    ],
  },
  "Explosion Vents": {
    name: "Explosion Vents",
    category: "safety",
    subCategory: "all",
    image: "/vents.png",
    introduction:
      "An explosion vent, also called a rupture panel, is a pressure relief device designed to protect buildings or equipment by releasing an explosion through the non-fragmenting vent thus eliminating any catastrophic overpressure. In addition to their safety functionality, they are popular because they are cost-effective, easy to install and require no maintenance.",
    benefits: [
      "Shape: Circular as well rectangular sizes",
      "MOC: SS 304, SS 316 & other on request",
      "Compliance with EN and NFPA",
      "Non Fragmenting design",
      "Maintenance Free",
      "Application specific designs available on request",
    ],
  },
  "Rupture Disc": {
    name: "Rupture Disc",
    category: "safety",
    subCategory: "all",
    image: "/r-disc.png",
    introduction:
      "A rupture disc is a multi-layer pressure relief device designed to burst at a specific pressure to protect systems from overpressure conditions. Constructed with layers of different materials, the RD offers enhanced durability, precise burst control, and versatility for various industrial applications.",
    technicalSpecs: {
      Sizes: "1'' to 24''",
      "Burst Pressure": "0.4 barg to 25 barg",
      "Operating Temperature": "upto 260 Deg.C",
      Tolerance: "+/- 2 psig or +/- 5 %",
      "OP/BP Ratio": "≤ 80 %",
      "MOC of RD": "SS 304, SS 316, HASTELLOY & other on request",
      "MOC of Holder": "SS304, SS316, CS and other on request",
      "End Connection": "Suitable to fit in standard ANSI Flanges with Holder",
    },
    benefits: [
      "Multi-Layer Design: Combines multiple materials to ensure strength, precision, and adaptability",
      "Accurate Burst Performance: Designed to activate at precise pressure thresholds for optimal protection",
      "Non-Fragmenting Design: Tailored designs for specific applications",
      "Wide Material Compatibility: Suitable for use with gases, liquids, and corrosive media",
      "Customizable Configurations: Available in various sizes, pressure ratings, and materials to meet unique application requirements",
    ],
  },
  "Siemens Positioner": {
    name: "Siemens Positioner",
    category: "valve",
    subCategory: "all",
    image: "/siemens.webp",
    introduction:
      "The Siemens SIPART PS2 is currently the most widely used positioner for linear and part-turn actuators in a wide range of process industries. This is not without reason. The proven all-rounder offers comprehensive functionality and diagnostics capability, controls a wide range of valves both safely and dependably and also fulfils a multitude of specific requirements optimally. For reliable control of final control elements in chemical or oil and gas sectors, or for precise control of valves in the pharmaceutical or food industry: SIPART PS2 provides the right solution for every valve. Another point in favour of the PS2 positioner is the low consumption of compressed air. SIPART PS2 minimizes it as well as the CO₂ emission which is caused by the compressors. This means our positioner offers savings of up to 90 percent compared to conventional devices.",
    technicalSpecs: {
      Version: "2 Wire (4-20mA) without HART",
      "For Actuating": "Single Acting",
      Enclosure: "Polycarbonate",
      "Explosion Protection": "None",
      "Connection Thread Electrical": "M20x1.5mm²",
      "Connection Thread Pneumatic": "G¼",
      "Limit Monitoring": "None",
      Options: "None",
      "Mounted Pressure Gauge": "None",
    },
  },
  Accessories: {
    name: "Accessories",
    category: "valve",
    subCategory: "all",
    image: "/access.webp",
    introduction:
      "This bracket kit is for mounting a SMC 8100 Rotary Type Pneumatic Positioner to a F79U Actuator. This kit does not include a feedback arm (Purchase Separately). Please feel free to discuss with us about your product requirement. Instrowest can help you with product Supply, Installation and Calibration.\n\nIf out of stock, Typical Lead Time: 1 Week",
  },
  "Smart Electro Pneumatic Valve Positioner": {
    name: "Smart Electro Pneumatic Valve Positioner",
    category: "valve",
    subCategory: "all",
    image: "/sepv.png",
    introduction:
      "A positioner is an electro pneumatic device that controls and regulates the flow of a medium in control valves at various types of the process industries. Valve positioner provides a signal to the valve actuator until the valve stem reaches a position of opening or closing. A smart positioner is an advanced type of valve positioner used to precisely control valve position in response to a control signal — but with built-in intelligence, diagnostics, and digital communication capabilities.",
    technicalSpecs: {
      Input: "2-wire",
      "Output/Communication": "4–20 mA, HART, PROFIBUS PA, FOUNDATION Fieldbus",
      "Enclosure materials": "Polycarbonate, Stainless Steel, Aluminum",
      Threads: "NPT & Metric",
      Versions: "Standard / Fail-safe / Fail-in-Place / Fail-to-Open",
      Options: "Gauges, Feedback Cards, Mounting Accessories",
      Approvals: "CE, FM, CSA, UL, ATEX, IECEx",
    },
    benefits: [
      "Easy installation & automatic commissioning",
      "Simple local or remote configuration (SIMATIC PDM)",
      "High control performance with low air consumption",
      "Multiple fail-safe modes (Fail Safe, Fail-in-Place, Fail-to-Open)",
      "Supports linear, part-turn, and cylinder actuators",
      "Extensive diagnostics for performance & maintenance",
      "Operable with natural gas, CO₂, nitrogen, or noble gases",
    ],
    applications: [
      "Valve manufacturing",
      "Chemical & petrochemical plants",
      "Oil & gas",
      "Water & wastewater",
      "Power generation",
      "Paper, pharma, food & beverage industries",
    ],
  },

  /* ------------------ INSULATION PRODUCTS ------------------ */
  "Loose Glass Wool": {
    name: "Loose Glass Wool",
    category: "insulation",
    subCategory: "all",
    image: "/loose glass wool.png",
    imageFit: "contain",
    introduction:
      "By utilizing skills of our dexterous workforce, we are offering a comprehensive assortment of Loose Glass Wool. Our professionals developed this glass wool by employing optimum quality raw material and sophisticated technology in adherence to the set industry standards. Owing to features like precise design, and easy to use, our offered product has been able to earn a lot of popularity in the market. Moreover, our valuable clients can avail this glass wool from us at market leading prices.",
    benefits: [
      "Sturdiness",
      "High performance",
      "Long service life",
    ],
  },
  "Polybond Mineralwool Thermal Insulation Wool": {
    name: "Polybond Mineralwool Thermal Insulation Wool",
    category: "insulation",
    subCategory: "all",
    image: "/Polybond  Mineralwool.png",
    introduction:
      "Polybond Mineralwool is a premium quality white mineral wool insulation known for its excellent thermal properties and high rebound capacity. It is designed to meet rigorous industrial standards, providing effective insulation with a density range suitable for diverse applications.",
    technicalSpecs: {
      Brand: "Polybond",
      Color: "White",
      Material: "Mineralwool",
      Density: "60-200 kg per cubic metre",
      Rebound: "99.8%",
      "Minimum Order Quantity": "7000 Kilogram",
    },
  },
  "Ceramic Fiber Wool": {
    name: "Ceramic Fiber Wool",
    category: "insulation",
    subCategory: "all",
    image: "/ceramic fiber wool.png",
    imageFit: "contain",
    introduction:
      "With our experienced professionals, we are engaged in offering a wide range of Ceramic Fiber Wool to our most valued clients. Normally it is used in Packing & Filling, Expansion Joints and Secondary Processing. This product is manufactured by vendors using high grade material and latest technology used in this domain. Moreover, our offered range is checked against various parameters under the vigilance of our quality controllers to deliver a flawless range at the client’s end. Apart from this, we avail offered fiber wools at market leading price.",
    benefits: [
      "Excellent thermal insulation",
      "Developed by professionals",
      "Smooth finish",
    ],
  },
  "Lightly Resin Bonded Mattress": {
    name: "Lightly Resin Bonded Mattress",
    category: "insulation",
    subCategory: "all",
    image: "/Lightly Resin Bonded Mattress.png",
    introduction:
      "Polybond Rockwool LRB Mattresses are recommended for use in the thermal insulation of large vessels, boilers, machinery, equipments, ducts, flanges, values and plates operating at high temperatures. These mattresses are excusively suited for wrapping curved surfaces or for cutting to fit over irregular shapes.",
    benefits: [
      "Excellent stability due to uniform thickness and density",
      "Prevention of heat losses",
      "Suited for wrapping curved surfaces",
      "Easy to cut and fit over irregular shapes",
    ],
    technicalSpecs: {
      Thickness: "25-100 mm",
      Density: "80 to 150 kg/m3",
      Brand: "Polybond",
      Material: "Mineralwool",
      Color: "Yellow",
      "Packaging Type": "HDPE Bag & LD Plastic",
    },
  },
  "Ceramic Fibre Board": {
    name: "Ceramic Fibre Board",
    category: "insulation",
    subCategory: "all",
    image: "/Ceramic Fibre Board.png",
    introduction:
      "Ceramic Fiber Board is made from refractory fibers and binders which have low organic content, the mixture is vacuum processed into boards that imparts good mechanical strength even after heating. Boards are manufactured in various densities and temperature grades to suit application requirements.",
    benefits: [
      "Low thermal conductivity",
      "Resistant to thermal shock",
      "Great Mechanical Strength",
      "Even density and thickness",
      "Able to withstand gas flow velocity of 30 m/sec",
      "Easy to cut and install",
      "Good erosion resistance",
      "Short heat up and cool down time",
      "Asbestos free",
    ],
    applications: [
      "Hot face lining of ceramic fibre kiln",
      "Insulation for kiln car",
      "Furnace door insulation",
      "Duct insulation",
      "General thermal barrier",
      "High temperature insulation",
    ],
  },
  "Ceramic Fiber Blanket": {
    name: "Ceramic Fiber Blanket",
    category: "insulation",
    subCategory: "all",
    image: "/Ceramic Fiber Blanket.png",
    introduction:
      "Blanket is a light weight needled blanket, provides effective solution to a wide range of thermal insulation applications. Manufactured using state of the art spinning and double needling technique, these blankets offer low thermal conductivity and superior insulation performance.\n\nBlanket is made from high purity Alumina, Silica and Zirconia. It is highly efficient insulator with extremely low shrinkage characteristics.",
    benefits: [
      "Smoke free Inorganic",
      "High temperature durability",
      "Excellent thermal insulation",
      "High temperature stability",
      "Resist to thermal shock",
      "Light weight and low heat storage",
      "Chemical stability",
      "Low thermal conductivity",
      "Good sound absorption",
      "Good confrontation to tearing",
    ],
    applications: [
      "Fire protection",
      "Process heater lining",
      "Boiler and turbine insulation linings",
      "Fuel cell insulation",
      "Chimney insulation",
      "Storage heater tank insulation",
      "Aluminium transfer conveyor",
      "Heat shielding for automotive parts",
      "Furnace and kiln sealing, packing and back-up insulation",
    ],
  },
  "Acoustic Insulation Slab": {
    name: "Acoustic Insulation Slab",
    category: "insulation",
    subCategory: "all",
    image: "/Acoustic Insulation Slab.png",
    introduction:
      "Mineralwool slab is used for building application like wall insulation and sound proofing of partitions and false celling’s, air-conditioning duct insulation and industrials insulation like chimney insulation, furnaces insulation, industrials ovens etc. Mineralwool RB slabs are used in acoustic insulation work for auditorium, theatres, public place and industrial areas where noise reduction is required. Mineralwool RB slab is used in DG canopy and compression canopy, using Mineralwool RB slabs dampens the sound and provide much clean & silent work place.",
    technicalSpecs: {
      Thickness: "25 mm – 100 mm",
      "Packaging Type": "HDPE Bag",
      Brand: "Polybond",
      Color: "Yellow",
      Material: "Mineralwool",
      Application: "General Building",
      Width: "600mm",
      Densities: "40 kg/m3 to 150 kg/m3",
      "Minimum Order Quantity": "1200 Square Meter",
    },
  },
  "Thermal Insulation Slab": {
    name: "Thermal Insulation Slab",
    category: "insulation",
    subCategory: "all",
    image: "/Thermal Insulation Slab.png",
    introduction:
      "Polybond’s Mineralwool Resin Bonded Slabs provide the best combination of thermal insulation, fire protection and sound absorption properties conforming to standards IS: 8183:93, ASTM C 612 and BS-3958B-5.\n\nMineralwool slab is made of fine fibers spun from selected rocks melted at high temperature and bonded with a thermosetting resin. The uniform distribution, the fine diameter, fiber lay pattern and flexibility of fiber are the unique features of ‘Polybond’ Mineralwool Resin Bonded Slabs. The properties are controlled to form slabs of predetermined density and thickness. These are quite versatile, easy to transport and easy to cut, fit and handle.",
    technicalSpecs: {
      "Working temperature":
        "-200°C ~ 650°C (STEAM) / -200°C ~ 565°C (ATMOSPHERE)",
      "Max. working pressure": "35 Mpa (static sealing)",
      "PH value": "0-14",
      "Linear speed": "0-2 M/S (valve)",
      "Cross Section": '1/4" ~ 1-1/2" (6X6-38X38mm)',
      Density: "1.10 ~ 1.20 g/cc",
    },
  },

  // packing products
  "Fibre Packing Sheets": {
    name: "Fibre Packing Sheets",
    category: "packing",
    subCategory: "fibre",
    image: "/fibre-packing-sheets.png",
    introduction:
      "We are authorized stockist for SPITMAAN industries. We stock a wide range of compressed fibre gasket sheets which can be cut as per your specifications for more details contact us.",
  },

  "Aramid Packing": {
    name: "Aramid Packing",
    category: "packing",
    subCategory: "gland",
    image: "/Aramid-Packing.jpg",
    introduction:
      "ANTI ABRASIVE PACKING Duplex Plaited Non-Asbestos Synthetic Fibre product which is as strong as steel, as smooth as silk, most flexible and treated with high temperature resisting lubricants, under controlled conditions. Well suited for pumping granular and viscous fluids even under high pressure conditions. This packing has a high degree of resiliency and consistency of volume and hence avoids frequent gland adjustments. Low thermal expansion characteristics under actual operating conditions reduce mechanical pressure against shaft sleeves to minimize abrasion effect.",
    technicalSpecs: {
      Temperature: "-200°C to 300°C",
      Pressure: "upto 280 Bar",
      PH: "3 -12",
      Packaging:
        "1. Sizes 3 mm to 5 mm in spools of 10 mtrs\n2. Sizes above 5 mm in Boxes/Kgs\n3. Also available in accurate cut rings.",
    },
  },

  "Asbestos PTFE Packing": {
    name: "Asbestos PTFE Packing",
    category: "packing",
    subCategory: "gland",
    image: "/asbestos-ptfe-packing.jpg",
    introduction:
      "Asbestos PTFE packing is made of white asbestos fiber cords impregnated with PTFE dispersion. Soft in texture, this material is suitable for sealing pumps for various chemicals. However, packing impregnated with lubricants is recommended for use with reciprocating pumps or for sealing in places where high linear velocity.",
    technicalSpecs: {
      "Max. working temperature": "-75°C ~ 260°C",
      "Max. working pressure":
        "2 Mpa (rotary pump) / 10 Mpa (reciprocating pump) / 15 Mpa (valve)",
      "PH value": "2-12",
      "Linear speed":
        "0–10 m/s (rotary pump) / 0–2 m/s (reciprocating pump) / 0–2 m/s (valve)",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density: "1.35 ~ 1.45 g/cc",
    },
  },

  "Carbon Fiber Packing": {
    name: "Carbon Fiber Packing",
    category: "packing",
    subCategory: "gland",
    image: "/carbon-fiber-packing.jpg",
    introduction:
      "Carbon fiber packing with graphite is woven of strong carbon fiber after softening treatment and impregnation with a mixture latex of fine graphite powder, PTFE dispersion and lubricant. It is chemical resistant, heat conductive and with high strength, so this item is widely used with revolving and reciprocating pumps in which chemical corrosive media and particle grains exist. The successful test result in application of high pressure ammonium and liquid ammonia pumps proved it’s the best sealing material for high pressure, high temperature and corrosion.",
    technicalSpecs: {
      "Max. working temperature":
        "-200°C ~ +650°C (STEAM) / -200°C ~ +565°C (ATMOSPHERE)",
      "Max. working pressure":
        "5 Mpa (rotary pump) / 15 Mpa (reciprocating pump) / 25 Mpa (valve)",
      "PH value": "0-14",
      "Linear speed":
        "0–20 M/S (rotary pump) / 0–2 M/S (reciprocating pump) / 0–2 M/S (valve)",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density: "1.35 ~ 1.45 g/cc",
      "Regular package": "5 or 10 kg/roll",
    },
  },

  "Carbonized Fiber Packing": {
    name: "Carbonized Fiber Packing",
    category: "packing",
    subCategory: "gland",
    image: "/carbonized-fiber-packing.webp",
    introduction:
      "Carbonized fiber packing is manufactured by heating polyacrylonitrile fiber into carbonized fiber, which is then braided into packing after impregnation in PTFE dispersion. This item has good heat conduction and low corrosion rate, and the price is relatively lower, so it’s generally used in dynamic sealing in the presence of weak acid or alkaline media, or media that contains few solid particle grains.",
    technicalSpecs: {
      "Max. working temperature": "-100°C ~ +260°C",
      "Max. working pressure":
        "3.5 Mpa (rotary pump) / 12 Mpa (reciprocating pump) / 15 Mpa (valve)",
      "PH value": "2-12",
      "Linear speed":
        "15 M/S (rotary pump) / 2 M/S (reciprocating pump) / 2 M/S (valve)",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density: "1.20 ~ 1.35 g/cc",
    },
  },

  "Composite Aramid Fiber Packing": {
    name: "Composite Aramid Fiber Packing",
    category: "packing",
    subCategory: "gland",
    image: "/composite-aramid-fiber-packing.webp",
    introduction:
      "Composite aramid fiber packing is made from imported aramid short fiber which is twisted in advanced technology and impregnated with PTFE latex and high-temperature lubricated. It’s softer than common aramid fiber packing and has more content of PTFE and lubricant to make sure its fibers closer to each other to supply high lubricant and low abrasion of shaft, especially suitable for reciprocating pumps with small grains, high pressure and high line speed.",
    technicalSpecs: {
      "Working temperature": "-100°C – +260°C",
      "Max. working pressure":
        "5 Mpa (rotary pump) / 10 Mpa (reciprocating pump) / 20 Mpa (valve)",
      "PH value": "2-12",
      "Linear speed":
        "15 M/S (rotary pump) / 2 M/S (reciprocating pump) / 2 M/S (valve)",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density: "1.50 ~ 1.65 g/cc",
    },
  },

  "Expanded Graphite Packing": {
    name: "Expanded Graphite Packing",
    category: "packing",
    subCategory: "gland",
    image: "/expanded-graphite-packing.webp",
    introduction:
      "Expanded graphite packing is braided from high-grade low sulphur expanded graphite yarn. This item has superior resistance from high temperature and chemical corrosion, as well as other special sealing effects. It’s widely used in steam valves of power station, static sealing with high temperature, high pressure and chemical corrosion.",
    technicalSpecs: {
      "Max. working temperature":
        "-200°C ~ +650°C (STEAM) / -200°C ~ +565°C (ATMOSPHERE)",
      "Max. working pressure":
        "25 Mpa (static) / 35 Mpa (with carbon fiber/wire) / 40 Mpa (inconel jacketed)",
      "PH value": "0 – 14",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density:
        "1.10 ~ 1.35 g/cc (standard) / 1.50 ~ 1.60 g/cc (inconel jacketed)",
    },
  },
  "Graphite Packing With Carbon Fiber": {
    name: "Graphite Packing With Carbon Fiber",
    category: "packing",
    subCategory: "gland",
    image: "/graphite-packing-with-carbon-fiber.webp",
    introduction:
      "Graphite gland packing with carbon fiber corner is braided from expanded graphite yarn, which can withstand high temperature and carbon fiber with superior corrosion resistance. The carbon fiber in four corners provides higher resistance to extrusion and attrition. This packing can effectively avoid leakage, especially suitable in application of power station valve with high temperature and pressure.",
    technicalSpecs: {
      "Working temperature":
        "-200°C ~ 650°C (STEAM) / -200°C ~ 565°C (ATMOSPHERE)",
      "Max. working pressure": "35 Mpa (static sealing)",
      "PH value": "0-14",
      "Linear speed": "0-2 M/S (valve)",
      "Cross Section": '1/4" ~ 1-1/2" (6X6-38X38mm)',
      Density: "1.10 ~ 1.20 g/cc",
    },
  },
  "PTFE Packing With Graphite": {
    name: "PTFE Packing With Graphite",
    category: "packing",
    subCategory: "gland",
    image: "/ptfe-packing-with-graphite.webp",
    introduction:
      "PTFE braided packing with graphite is woven of graphite PTFE yarn twisted through a mixture of PTFE dispersion resins and fine graphite powder, with a moderate amount of heat-resistant lubricant. Apart from its corrosion resistance, it has thermal conductivity and self-lubricating properties, and is suitable as dynamic sealing in conditions with media flow of high Linear velocity (about 16m/s).",
    technicalSpecs: {
      "Max. working temperature": "-75°C ~ 280°C",
      "Max. working pressure":
        "2.5 Mpa (rotary pump) / 8 Mpa (reciprocating pump) / 15 Mpa (valve)",
      "PH value": "0 – 14",
      "Linear speed":
        "0–12 m/s (rotary pump) / 0–2 m/s (reciprocating pump) / 0–2 m/s (valve)",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density: "1.65 ~ 1.75 g/cc",
      "Regular package": "5 or 10 kg/roll",
    },
  },
  "PTFE Pure PTFE packing": {
    name: "PTFE Pure PTFE packing",
    category: "packing",
    subCategory: "gland",
    image: "/ptfe-pure-ptfe-packing.webp",
    introduction:
      "A special all Chemical Packing manufactured from Pure PTFE Fibres having DUPLEX BRAID construction to increase dimensional stability treated with inert high temperature resisting lubricant to resist migration and to display compressibility and recovery characteristics. The packing is safe, more flexible, and non-toxic. Fluids can be sealed with a minimum of gland pressure, consequently there is less friction as well as heat build up. It is an inert, virtually indestructible packing, having a lower co-efficient of friction with good compressive strength.\n\nService: A good packing to seal against concentrated acids, alkali solutions, oils, corrosive gases, food-stuff and pharmaceutical industries. This packing is not recommended to use on molten metals and gaseous fluorine.",
    technicalSpecs: {
      Temperature: "-200°C to 290°C",
      Pressure: "upto 350 Bar",
      PH: "0 - 1",
    },
  },
  "Ramie Graphite Packing": {
    name: "Ramie Graphite Packing",
    category: "packing",
    subCategory: "gland",
    image: "/ramie-graphite-packing.webp",
    introduction:
      "Ramie graphite packing is made from ramie fiber which is treated with special process and high-temperature lubricant. It’s an ideal gland packing to be used in sealing of ash-removing pump, sediment pump, booster pump, and water feeding pump of power station, as well as high pressure slurry pump of oil field and fluid pumps of mine.",
    technicalSpecs: {
      "Working temperature": "-40°C ~ +140°C",
      "Max. working pressure":
        "3 Mpa (rotary pump) / 5 Mpa (reciprocating pump) / 12 Mpa (valve)",
      "PH value": "5-12",
      "Linear speed":
        "10 M/S (rotary pump) / 2 M/S (reciprocating pump) / 2 M/S (valve)",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density: "1.30 ~ 1.40 g/cc",
    },
  },
  "Ramie PTFE Packing": {
    name: "Ramie PTFE Packing",
    category: "packing",
    subCategory: "gland",
    image: "/ramie-ptfe-packing.webp",
    introduction:
      "Ramie fiber is very soft and easy to be impregnated. It turns to be with higher strength, better corrosion and attrition resistance after impregnation of PTFE dispersion. The packing made of ramie fiber has very slim attrition to the shaft, so it’s an ideal material to be used in sea water, clean water with low temperature, low speed, and equipment with the media of food, oil, and fruit juice, etc.",
    technicalSpecs: {
      "Working temperature": "-40°C ~ +140°C",
      "Max. working pressure":
        "3 Mpa (rotary pump) / 6 Mpa (reciprocating pump) / 15 Mpa (valve)",
      "PH value": "4-11",
      "Linear speed":
        "8 M/S (rotary pump) / 1.5 M/S (reciprocating pump) / 1.5 M/S (valve)",
      "Cross Section": '1/8" ~ 3" (3X3-75X75mm)',
      Density: "1.25 ~ 1.35 g/cc",
    },
  },

  "Style 165: Ceramic": {
    name: "Style 165: Ceramic",
    category: "packing",
    subCategory: "gland",
    image: "/style-165-ceramic.webp",
    introduction:
      "A Non-Asbestos Braided Packing manufactured from a special grade of Alumina Silica Ceramic Fibre having superior insulating property suitable for a wide variety of industrial applications. This has excellent resistance to thermal shock flame corrosion greater compression resistance. The packing has very good resiliency even at high temperature, chemically stable, low thermal conductivity are just some of the properties of this material.\n\nService: This is a very efficient packing for insulating applications in coke ovens, door joints of steel plants, refractory backup to reduce heat loss and prolongs refractory life, prevents fume emission on exhaust collection system, blast furance application, pertoleum and petrochemical industries flue gas duct applications of thermal power stations, ship and ship building industries, expansion joints, a fire retardant in nuclear power plant and chemical industries manufactured in round or square section.",
    technicalSpecs: {
      Temperature: "1250°C",
      Packaging:
        "1. 6 mm to 10 mm in coils of 2.5kgs.\n2. 12 mm to 25 mm in coils of 5kgs.\n3. Above 25 mm in coils of 10kgs.",
      Note: "Not recommended for phospheric acid and hot concentrated alkalies",
    },
  },

  "Spiral Wound Gaskets": {
    name: "Spiral Wound Gaskets",
    category: "packing",
    subCategory: "flange",
    image: "/spiral.webp",
    introduction:
      "Special Spring like Metal strips are wound with an Asbestos Filler by a special process to assure a leak proof seal. The sealing is done by the Asbestos Filler and the metal strip provides the spring. This combination of metal and soft asbestos Filler piles compresses to its predetermined thickness under bolting pressure and thereby preventing leakage within the limit of its specified pressure and temperature ranges. With the addition of Centering devices, adapt Spiral Wound Gaskets to use on many types of flanges and closures.\n\nHow To Order:\nWhen ordering Spiral Wound Gaskets, give the following information:\n1. Quantity\n2. Gasket shape\n3. Inside and outside Dimension of Gaskets\n4. Flange width\n5. Gasket Thickness\n6. Operating Pressure\n7. Operating Temperature",
    technicalSpecs: {
      "Standard Materials":
        "Type 304 Stainless steel with white Canadian (Chrysotlie) Asbestos Filler",
      "Materials (Metals)":
        "Type 304 Stainless, Type 316 Stainless, Aluminium, Copper, Monel, Steel Plain, Steel Zinc Coated",
      "Materials (Fillers)":
        "Compressed Asbestos Jointing Strips, P.T.F.E. Sintered Strip, Asbestos paper, White Chrysotile Asbestos, Blue African Crocidolite, Grafseal",
      "Gasket Thickness":
        "Normal: 1/8″ (3.2 mm) → Actual: .125″ ± .005″ (3.2 mm)\nNormal: 3/16″ (4.8mm) → Actual: .175″ ± .005″ (4.5 mm)",
    },
  },

  "Style 168: Ceramic": {
    name: "Style 168: Ceramic",
    category: "packing",
    subCategory: "gland",
    image: "/style-168-ceramic.webp",
    introduction:
      "This packing manufactured from a unique grade of ceramic fibre undergoes a special process to obtain high purity composition required for superior thermal insulation properties. The packing is reinforced with Inconel wire which increases mechanical strength and resistance to compression.\n\nService: Packings are resistant to oil, greases, steam and most of the chemicals. It is not suited to certain strong alkalies and solutions. It resists molten metal.",
    technicalSpecs: {
      Temperature: "1200°C",
      Packaging:
        "1. 6 mm to 10 mm in coils of 2.5kgs.\n2. 12 mm to 25 mm in coils of 5kgs.\n3. Above 25 mm in coils of 10kgs.",
    },
  },

  "Style 2222 : Aqua Special": {
    name: "Style 2222 : Aqua Special",
    category: "packing",
    subCategory: "gland",
    image: "/style-2222-aqua-special.webp",
    introduction:
      "This packing is specially constructed from fine quality long tough abrasion resistant vegetable fibre yarn. During the process of manufacture, each strand is impregnated with non-graphite lubricant to enhance the antifriction property.\n\nService: The special design of solid plait having medium density and good flexibility enables to withstand high pressure and temperature for all hydraulic uses in pumps, water wheel, shafts, sea water, river water and STERN GLANDS.",
    technicalSpecs: {
      Temperature: "130°C",
      Pressure: "upto 200 Bar",
      PH: "6 – 8",
      Packaging:
        "1. Sizes 3 mm to 10 mm is supplied in spools of 6 mtrs.\n2. 11 mm and 12.5 mm in coils of 3 mtrs.\n3. above 12.5 mm in Boxes/Kgs.\n4. Also can be supplied in accurate cut rings.",
    },
  },

  "Style 374: Hydroflon": {
    name: "Style 374: Hydroflon",
    category: "packing",
    subCategory: "gland",
    image: "/style-374-hydroflon.webp",
    introduction:
      "A multiservice Hydraulic Packing DUPLEX Braided manufactured from pre-impregnated soft vegetable fibre yarn. During the process it is further treated with special additives having lowest co-efficient of friction along with break-in lubricants. This special additive avoids discolouration of the product pumped.\n\nService: This packing is best suited to seal the glands of pumps, valves handling condensate, demineralised water, cold and hot water application in thermal power plants and hydraulic installations.",
    technicalSpecs: {
      Temperature: "150°C",
      Pressure: "upto 80 Bar",
      PH: "4 -10",
      Packaging:
        "1. Sizes 3 mm to 5 mm is supplied in spools of 10 mtrs.\n2. Sizes above 5 mm is supplied in Boxes/Kgs.\n3. Also can be supplied in accurate cut rings.",
    },
  },

  "Style 376: Hydraulic Shipping": {
    name: "Style 376: Hydraulic Shipping",
    category: "packing",
    subCategory: "gland",
    image: "/style-376-hydraulic-shipping.webp",
    introduction:
      "A specially developed soft natural fibre yarn packing non-graphited impregnated with top quality lubricants and specially processed to give high cross-sectional density and structural strength.\n\nService: Recommended for high speed centrifugal demineralised water pumps, compressors and refrigerations, cooling water and condensate pump.",
    technicalSpecs: {
      Temperature: "130°C",
      Pressure: "upto 80 Bar",
      PH: "6 – 8",
      Packaging:
        "1. Sizes 3 mm to 10 mm is supplied in spools of 6 mtrs.\n2. 11 mm and 12.5 mm in coils of 3 mtrs.\n3. above 12.5 mm in Boxes/Kgs.\n4. Also can be supplied in accurate cut rings.",
    },
  },

  "STYLE-1100 Graphite Rope": {
    name: "STYLE-1100 Graphite Rope",
    category: "packing",
    subCategory: "gland",
    image: "/style-1100-graphite-rope.webp",
    introduction:
      "Lubricated and graphite general purpose asbestos packing for Glands for medium pressure conditions conforming to IS Specification 4687 & DGS&D Specification.",
    technicalSpecs: {
      "Service Recommendation": "Water, Brine Solution, acids / alkalis",
      "Available Sizes":
        "3 & 5 mm in Spools of 10 M. 6 -16 mm in 1 kg Coils, 19 mm – 50 mm in 5 kg Coils.",
    },
  },

  "White Asbestos Rope style 1000": {
    name: "White Asbestos Rope style 1000",
    category: "packing",
    subCategory: "gland",
    image: "/white-asbestos-rope-style-1000.webp",
    introduction:
      "Asbestos dry plaited general steam and insulation packing for hot gases, oven, autoclaves, etc., conforming to IS Specification 4687.",
    technicalSpecs: {
      "Type of Product": "White Dry Asbestos Plaited Packing",
      "Model No": "1000 Round /square",
      "Max. Working Temperature": "350°C",
    },
  },

  "Cut Fiber Gaskets": {
    name: "Cut Fiber Gaskets",
    category: "packing",
    subCategory: "flange",
    image: "/cut-fiber-gaskets.webp",
    introduction:
      "We can supply soft gaskets in Asbestos or Non Asbestos Grade for your requirement. The gaskets can be custom made as per your requirement. Please select the grade you want from jointing sheet section. We also stock many ASA 150 class raised faces gaskets in ready stock. Please contact us for your requirement.",
  },



  "Expanded Teflon (PTFE) Gasket": {
    name: "Expanded Teflon (PTFE) Gasket",
    category: "packing",
    subCategory: "flange",
    image: "/123.webp",
    introduction:
      "Expanded PTFE Sheet Gasket is a Universal sheet gasket material for most services. Seals rough and irregular surfaces. Seals of up to 3000+psi can be achieved depending on the flange type & design and type of media being sealed. This gasket is suitable for temperatures to 600°F. E-PTFE is much softer and more flexible than regular Expanded PTFE Sheet Gasket and thus conforms easily to irregular and rough surfaces. Size as per your specification.",
  },

  "Teflon (PTFE) Envelope Gasket": {
    name: "Teflon (PTFE) Envelope Gasket",
    category: "packing",
    subCategory: "flange",
    image: "/teflon-ptfe-envelope-gasket.webp",
    introduction:
      "Teflon (PTFE) Envelope Gaskets are available in various types including Slit Type and Milled Type / 'U' Type. Envelope gaskets are also available with Asbestos / Non-asbestos & Steel Filler.",
    technicalSpecs: {
      "Slit Type":
        "Available in 0.5 mm to 0.5 mm thick or thickness as per customer requirement",
      "Milled Type / 'U' Type":
        "Manufactured and available in 0.5 mm flange & gas, as per customer requirement",
    },
  },

  "Teflon (PTFE) Ring Gasket": {
    name: "Teflon (PTFE) Ring Gasket",
    category: "packing",
    subCategory: "flange",
    image: "/Teflon-Ring-Gasket.webp",
    introduction:
      "Range of PTFE ring and gasket is manufactured using moulding method with PTFE granular resin. PTFE, compared with other plastics, has superior properties against chemicals and temperature. The PTFE ring & gasket offered by us is highly acclaimed by all our clients due to their high reliability as well as durability. These ring joint gaskets are especially designed to withstand exceptionally high assembly loads over a small area, thus producing high seating stresses.",
  },

  "Ceramic Cloth": {
    name: "Ceramic Cloth",
    category: "packing",
    subCategory: "ceramic",
    image: "/ceramic-cloth.webp",
    introduction:
      "Ceramic Clothes and Ropes are woven from yarn consisting of refractory ceramic fibre with approximately 20% organic carrier fibre. Inserted materials are incorporated into the yarn to increase fabric tensile strength. These products have exceptionally low smoke-off characteristics upon heating as compared with standard ceramic fibre textiles.",
    technicalSpecs: {
      "Temp Resistance": "1260 °C",
      Size: "3MM Thickness, Width 1 MTR, Length up to 50MTRS",
    },
  },

  "Ceramic Tape": {
    name: "Ceramic Tape",
    category: "packing",
    subCategory: "ceramic",
    image: "/ceramic-tape.webp",
    introduction:
      "Ceramic Tape Ropes are woven from yarn consisting of refractory ceramic fibre with approximately 20% organic carrier fibre. Inserted materials are incorporated into the yarn to increase fabric tensile strength. These products have exceptionally low smoke-off characteristics upon heating as compared with standard ceramic fibre textiles.",
    technicalSpecs: {
      "Temp Resistance": "1260 °C",
      Size: "Tape is supplied in 10kg rolls of 1”, 2” 3” or 4”",
    },
  },
  "Ceramic Rope": {
    name: "Ceramic Rope",
    category: "packing",
    subCategory: "ceramic",
    image: "/ceramic-rope.webp",
    introduction:
      "Ceramic Fiber Rope is mainly used for high temperature sealing and packing application. It is light weight, resilient and has a property of high temperature resistance and chemical stability. To further improve mechanical properties the ropes can be reinforced with metallic wire.",
    technicalSpecs: {
      "Temp Resistance": "1260 °C",
      Size: "3MM, 6MM, 8MM, 10MM, 12MM, 16MM, 19MM & 25MM in square or round shapes. Standard packing of 5kgs",
    },
  },

  "PTFE Sheets": {
    name: "PTFE Sheets",
    category: "packing",
    subCategory: "ptfe",
    image: "/ptfe-sheets.webp",
    introduction:
      "We offer a wide range PTFE Molded Sheet / Skived sheets.",
    technicalSpecs: {
      "Standard Size":
        "Thickness From 1.5 mm to 100 mm / 300 mm² / 400 mm² / 450 mm² / 500 mm² / 600 mm² / 900 mm² / 1000 mm² / 1200 mm²",
      "Available Grades":
        "Virgin PTFE, 15% Peek PTFE, 15 To 25% Glass Filled PTFE, 25 To 35% Carbon Filled PTFE, 15% Graphite Filled PTFE",
      "Special Grade": "As per customer specification",
    },
  },

  "Teflon Rods, Bushes & Tubes": {
    name: "Teflon Rods, Bushes & Tubes",
    category: "packing",
    subCategory: "ptfe",
    image: "/teflon-rods-bushes-tubes.webp",
    introduction:
      "We can supply Teflon Rods & Bushes as in different sizes as per your requirement. Graphite filled, Glass Filler or Carbon filled as per your specifications.",
    technicalSpecs: {
      "Rods":
        "Dia 3–250 (standard), Length 300–900 mm (standard). Large sizes can be made to order.",
      "Tubes (Flexible)":
        "I.D. 1.6–25 mm, Wall Thickness 0.8–1.6 mm, Length 3000–12000 mm",
      "Bushes (Standard)":
        "O.D. 32–150 mm, I.D. 12.5–127mm, Length 100 mm (upto 300 mm in special cases). Larger sizes made to order.",
      "Bushes (Rigid)":
        "O.D. 25–100 mm, I.D. 19–89 mm, Length upto 5000 mm, Wall Thickness 3–25 mm",
    },
  },

  "Teflon Belows": {
    name: "Teflon Bellows",
    category: "packing",
    subCategory: "ptfe",
    image: "/teflon.webp",
    technicalSpecs: {
      "Line Bellows":
        "Nominal bore 25–225mm. Bigger sizes as per order.",
      "Valve Bellows":
        "Complete with spindles. Nominal bore 25 mm onwards.",
      "Stirrer Bellows":
        "Nominal bore 25 mm onwards. These bellows can be supplied with / without steel flanges.",
    },
  },
  "Teflon Universal Rope": {
    name: "Teflon Universal Rope",
    category: "packing",
    subCategory: "ptfe",
    image: "/teflon-universal-rope.webp",
    introduction:
      "Flex-O-Seal is a unique sealing material manufactured from special grade of expanded 100% pure PTFE by transforming the fibrous structure by means of a special process. Though very tough, it is spongy and suited to almost all flanges, covers and narrow cavities. Its special soft and flexible character enables it to be the most ideal seal under pressure without significant cold flow even on irregular, badly damaged or corroded flange surfaces. Once bolted this gasket rarely need to be re-torqued.",
    technicalSpecs: {
      "Recommended Temperature": "-240°C to 310°C",
      "PH Range": "0-14",
      "Deterioration": "No deterioration due to stocking for long time",
      "Properties":
        "Resistant to high pressure, non-toxic. Not recommended for use against elemental fluorine, alkali metals and strong oxidizing agents.",
      "Sizes": "Contact us for details",
    },
    applications: [
      "Petroleum refining (including offshore)",
      "Corrosive chemical processing",
      "Food processing",
      "Paper mill",
      "Marine installation",
      "Glass lined or fibre glass reinforced vessels and tank lid sealing",
      "Manhole covers, vent pipes",
      "Heat exchangers",
      "Pumps or compressors housing flanges, valves",
    ],
  },
  "Teflon Diaphragms with Neoprene Rubber Pad": {
    name: "Teflon Diaphragms with Neoprene Rubber Pad",
    category: "packing",
    subCategory: "ptfe",
    image: "/teflon-diaphragms.webp",
    introduction:
      "The almost universal chemical resistance, the high temperature resistance, the anti-stick, low friction surface of the PTFE Linings ensure minimum maintenance requirements. Low cost and efficient design along with long service life makes PTFE the most ideal material for use in valve and pump diaphragms.",
    applications: [
      "Pharmaceutical Industry",
      "Food Industry",
      "Chemical Industry",
      "Applications requiring high standard of cleanliness and purity",
    ],
    technicalSpecs: {
      "Sizes": "12–250 mm; larger ones on request",
    },
  },

  // PLC Products
  "Logo Plc System": {
    name: "Logo Plc System",
    category: "plc",
    subCategory: "basic",
    image: "/images/plc-images/logo-plc.jpeg",
    introduction: "LOGO serves as a micro PLC with an inbuilt window for indications and inbuilt keys for programming without requirement of PC/Laptop. It can handle maximum of 40 I/Os and certain restrictions apply in programming which has to be kept in mind during selection. Ideal PLC for Small applications.",
    technicalSpecs: {
      "Available Models": "LOGO 24 RCE, LOGO 12/24 RCE, 4 DI/ 4 DO modules, 8 DI/ 8 DO modules, 2 AI modules, 2 AI RTD modules, Communication modules",
    },
  },
  "S7-200 SMART SYSTEM": {
    name: "S7-200 SMART SYSTEM",
    category: "plc",
    subCategory: "basic",
    image: "/images/plc-images/s7-200.jpeg",
    introduction: "The S7-200 smart system supports 242 I/O and a maximum expansion modules supported are 8 including CPU. The CPUs available in S7-200 system are inbuilt with certain number of I/Os. Many CPUs are available such as ST20, ST30, ST40 and ST60. Excellent choice for small and medium applications. Various special communication modules are available Ethernet etc... S7-200 CN systems are economical range of PLC modules with CE certification.",
    technicalSpecs: {
      "Available Models": "ST-20, ST-30, ST-40, ST-60, SR-20, SR-30, SR-40, SR-60, CR-40, CR-60",
    },
  },
  "S7-1200 SYSTEM": {
    name: "S7-1200 SYSTEM",
    category: "plc",
    subCategory: "basic",
    image: "/images/plc-images/s7-1200.jpeg",
    introduction: "The Siemens S7-1200 PLC system supports a maximum of 242 I/Os and a delightful choice for small and medium range of applications. This family of PLCs have got inbuilt profinet port and can be connected to any Ethernet/Profinet systems. Programming and monitoring can be done in the PLC from Desktop / Laptop with simple Ethernet cable with RJ45 connector without need of special communication adaptors. Capability range of this PLC system is inbetween S7 -200 and S7-300 PLC systems. Maximum of 8 modules can be connected including CPU. The CPUs are with on board I/Os. New HMI series of KTP (KTP 400 onwards) are launched with Profinet ports to enable direct connectivity to S7- 1200 CPUs.",
    technicalSpecs: {
      "Available Models": "CPU 1211 C, CPU 1212 C, CPU 1214 C, 1215 C, 1217 C, CPU 1212 FC, 1214 FC, 1215 FC",
      "Modules": "4 DI/ 8 DI/16 DI input modules, 8 DO/ 16 DO relay modules, 1 AI/4 AI/ 8AI analog modules, 1 AO/2 AO/4AO analog modules",
    },
  },
  "S7-300 SYSTEM": {
    name: "S7-300 SYSTEM",
    category: "plc",
    subCategory: "advanced",
    image: "/images/plc-images/s7-300.jpeg",
    introduction: "The S7-300 system supports up to 1024 I/Os with centralized or Distributed configurations. Excellent speed and good choice for medium and large applications. Wide range of CPU availability with respect to applications. CPUs with inbuilt communication capabilities to Profibus, Profinet are available. Failsafe modules and Redundancy support is possible. Fail safe PLCs are intended for critical application where safety is critical.",
  },
  "S7-400 SYSTEM": {
    name: "S7-400 SYSTEM",
    category: "plc",
    subCategory: "advanced",
    image: "/images/plc-images/s7-400.jpeg",
    introduction: "The S7-400 system supports higher than 1024 I/Os and an ultimate choice for large process plants such as Power plants, Cement plants etc. Various redundant configurations are possible making it an excellent choice for critical applications. CPUs with integrated Profibus and Profinet are available. Wide range of CPUs available to choose depends on the process requirements.",
  },
  "S7-1500 SYSTEM": {
    name: "S7-1500 SYSTEM",
    category: "plc",
    subCategory: "advanced",
    image: "/images/plc-images/s7-1500.jpeg",
    introduction: "The S7-1500 SYSTEM is an advanced programmable logic controller offering maximum performance and usability for medium to high-end machine applications.",
    technicalSpecs: {
      "Available Models": "CPU 1511 C, 1512 C, CPU 1511-1, 1513-1, 1515-2 PN, CPU 1516-3 PN / DP, 1517- 3 PN/DP, 1518-4 PN/DP",
      "Modules": "16 / 32 channel DI modules, AC/ DC DI modules, 8/16/32 Channel DI module, AC/DC DO modules, 4 / 8 channel DO moduless, Thermocouple and RTD modules",
    },
  },
  "ET 200 M Systems": {
    name: "ET 200 M Systems",
    category: "plc",
    subCategory: "distributed",
    image: "/images/plc-images/et-200-m.jpeg",
    introduction: "This is a medium range distributed PLC system with all facilities as mentioned in ET 200 S system medium group of I/Os located in groups in a plant distributed over a large area. The expansion modules used in Centralised S7 300 System can be used in this system.",
  },
  "ET 200 S Systems": {
    name: "ET 200 S Systems",
    category: "plc",
    subCategory: "distributed",
    image: "/images/plc-images/et-200-s.jpeg",
    introduction: "A compact PLC used in Distributed Profibus / Profinet systems where small group of I/Os are located in groups in a plant distributed over a large area. The modules as small as 4 digital inputs and 4 digital outputs or 2 analog inputs are available as individual modules at an economical pricing and the ET 200S modules can be supported with an interface module and connects by Profibus cable or Profinet cable. This enables localized PLC systems near to field equipments enables easy monitoring and a boon to maintenance engineer. It reduces cabling between each input/output to field equipments and a simple Profibus/Profinet cable connects the system to Main PLC.",
  },
  "HMI Systems": {
    name: "HMI - HUMAN MACHINE INTERFACE SYSTEMS",
    category: "plc",
    subCategory: "hmi",
    image: "/images/plc-images/hmi.jpeg",
    introduction: "Human Machine Interface Systems from Siemens for easy monitoring and operation of processes.",
    technicalSpecs: {
      "Available Panels": "BASIC AND KEY PANELS, COMFORT PANELS AND PC-BASED HMI, MOBILE PANEL, COMFORT PANELS, BASIC HMI, SIMATIC HMI, KEY PANELS SIMATIC, HMI BASIC PANEL, ADVANCED HMI PANEL-BASED",
    },
  },
  "Power Supply": {
    name: "Power Supply",
    category: "plc",
    subCategory: "power",
    image: "/images/plc-images/power-supply.jpeg",
    introduction: "Various power supplies are available from Siemens ranging from 2 amps to 20 amps with single phase 110/220 V input supply and from 5 amps to 40 amps with 3 phase 415 V input supply. 24v DC outputs are provided with short circuit protection. Elegantly and ruggedly designed independent and rack mounted PLC power supplies are also available. 30 V DC supplies are specially designed for ASI systems.",
  },
};

/* ------------------ PRODUCTS ------------------ */
const products: ProductDetail[] = [
  // Pressure
  productDetailsMap["Pressure Gauge"],
  productDetailsMap["Differential Pressure Gauge"],
  productDetailsMap["Pencil Type Pressure Transmitter"],
  productDetailsMap["Gauge Pressure Transmitter"],
  productDetailsMap["Absolute Pressure Transmitter"],
  productDetailsMap["Differential Pressure Transmitter"],

  // Level - Ultrasonic
  productDetailsMap["ECHOMAX XPS-10, XPS-15 & XPS-30"],
  productDetailsMap["SITRANS PROBE LU240"],

  // Level - Radar
  productDetailsMap["SIEMENS LR100 SERIES"],
  productDetailsMap["SITRANS LR100"],
  productDetailsMap["SITRANS LR110"],
  productDetailsMap["SITRANS LR120"],
  productDetailsMap["SITRANS LR140"],
  productDetailsMap["SITRANS LR150"],
  productDetailsMap["SIEMENS LR500 SERIES"],
  productDetailsMap["SITRANS LR510"],
  productDetailsMap["SITRANS LR530"],
  productDetailsMap["SITRANS LR550"],
  productDetailsMap["SITRANS LR580"],

  // Level - Switches
  productDetailsMap["CAPACITANCE SWITCHES"],
  productDetailsMap["VIBRATING SWITCHES"],
  productDetailsMap["ROTATION PADDLE SWITCHES"],
  productDetailsMap["ULTRASONIC NON-CONTACTING SWITCHES"],

  // Flow
  productDetailsMap["ELECTROMAGNETIC FLOWMETER"],
  productDetailsMap["VORTEX FLOWMETER"],
  productDetailsMap["TURBINE FLOWMETER"],
  productDetailsMap["ORIFICE TYPE DP FLOW METER"],
  productDetailsMap["PITOT TUBE TYPE DP FLOW METER"],

  // Temperature
  productDetailsMap["RESISTANCE TEMPERATURE DETECTORS"],
  productDetailsMap["THERMOCOUPLES"],
  productDetailsMap["HEAD MOUNTED TRANSMITTERS"],
  productDetailsMap["FIELD MOUNT TEMPERATURE TRANSMITTER"],
  productDetailsMap["RAIL MOUNT TEMPERATURE TRANSMITTER"],

  // Safety
  productDetailsMap["Rupture Disc"],
  productDetailsMap["Safety Relief Valve"],
  productDetailsMap["Inline Flame Arrestor"],
  productDetailsMap["End of Line Flame Arrestor"],
  productDetailsMap["Explosion Vents"],

  // Valve Positioners
  productDetailsMap["Siemens Positioner"],
  productDetailsMap["Accessories"],
  productDetailsMap["Smart Electro Pneumatic Valve Positioner"],

  // Insulation
  productDetailsMap["Loose Glass Wool"],
  productDetailsMap["Polybond Mineralwool Thermal Insulation Wool"],
  productDetailsMap["Ceramic Fiber Wool"],
  productDetailsMap["Lightly Resin Bonded Mattress"],
  productDetailsMap["Ceramic Fibre Board"],
  productDetailsMap["Ceramic Fiber Blanket"],
  productDetailsMap["Acoustic Insulation Slab"],
  productDetailsMap["Thermal Insulation Slab"],

  // Packing
  productDetailsMap["Fibre Packing Sheets"],
  productDetailsMap["Aramid Packing"],
  productDetailsMap["Asbestos PTFE Packing"],
  productDetailsMap["Carbon Fiber Packing"],
  productDetailsMap["Carbonized Fiber Packing"],
  productDetailsMap["Composite Aramid Fiber Packing"],
  productDetailsMap["Expanded Graphite Packing"],
  productDetailsMap["Graphite Packing With Carbon Fiber"],
  productDetailsMap["PTFE Packing With Graphite"],
  productDetailsMap["PTFE Pure PTFE packing"],
  productDetailsMap["Ramie Graphite Packing"],
  productDetailsMap["Ramie PTFE Packing"],
  productDetailsMap["Style 165: Ceramic"],
  productDetailsMap["Style 168: Ceramic"],
  productDetailsMap["Style 2222 : Aqua Special"],
  productDetailsMap["Style 374: Hydroflon"],
  productDetailsMap["Style 376: Hydraulic Shipping"],
  productDetailsMap["STYLE-1100 Graphite Rope"],
  productDetailsMap["White Asbestos Rope style 1000"],
  productDetailsMap["Cut Fiber Gaskets"],
  productDetailsMap["Spiral Wound Gaskets"],
  productDetailsMap["Expanded Teflon (PTFE) Gasket"],
  productDetailsMap["Teflon (PTFE) Envelope Gasket"],
  productDetailsMap["Teflon (PTFE) Ring Gasket"],
  productDetailsMap["Ceramic Cloth"],
  productDetailsMap["Ceramic Tape"],
  productDetailsMap["Ceramic Rope"],
  productDetailsMap["PTFE Sheets"],
  productDetailsMap["Teflon Rods, Bushes & Tubes"],
  productDetailsMap["Teflon Belows"],
  productDetailsMap["Teflon Universal Rope"],
  productDetailsMap["Teflon Diaphragms with Neoprene Rubber Pad"],

  // PLC
  productDetailsMap["Logo Plc System"],
  productDetailsMap["S7-200 SMART SYSTEM"],
  productDetailsMap["S7-1200 SYSTEM"],
  productDetailsMap["S7-300 SYSTEM"],
  productDetailsMap["S7-400 SYSTEM"],
  productDetailsMap["S7-1500 SYSTEM"],
  productDetailsMap["ET 200 M Systems"],
  productDetailsMap["ET 200 S Systems"],
  productDetailsMap["HMI Systems"],
  productDetailsMap["Power Supply"],
];

function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveSubCategory("all"); // reset sub-category
  };

  const filteredProducts = products.filter((product, index) => {
    if (!product) {
      console.error(`Product at index ${index} is undefined in products array.`);
      return false;
    }

    const matchesCategory =
      activeCategory === "all" ? true : product.category === activeCategory;

    const matchesSubCategory =
      activeSubCategory === "all"
        ? true
        : product.subCategory === activeSubCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.introduction?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      false;

    return matchesCategory && matchesSubCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xl font-bold tracking-widest uppercase mb-4">
              OUR PRODUCTS
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Industrial Excellence
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our comprehensive range of high-quality instrumentation,
              packing, insulation, and valve products.
            </p>

            {/* SEARCH BAR */}
            <div className="max-w-md mx-auto relative mb-12 px-4 sm:px-0">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all pl-12 shadow-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-8 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>

          {/* BREADCRUMBS */}
          <div className="w-full mx-auto px-4 sm:px-0 mb-12 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <button
              onClick={() => {
                // If we are deep in the hierarchy, go back to just "Products" view (reset to all)
                setActiveCategory("all");
                setActiveSubCategory("all");
              }}
              className="hover:text-primary transition-colors font-medium flex-shrink-0"
            >
              Home
            </button>

            <ChevronRight className="w-4 h-4 flex-shrink-0" />

            <button
              onClick={() => {
                setActiveCategory("all");
                setActiveSubCategory("all");
              }}
              className={`hover:text-primary transition-colors font-medium flex-shrink-0 ${activeCategory === "all" ? "text-foreground font-bold" : ""}`}
            >
              Products
            </button>

            {activeCategory !== "all" && (
              <>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <button
                  onClick={() => {
                    // If we are in a subcategory, clicking the category name should reset subcategory
                    if (activeSubCategory !== "all") {
                      setActiveSubCategory("all");
                    }
                  }}
                  className={`hover:text-primary transition-colors font-medium flex-shrink-0 ${activeSubCategory === "all" ? "text-foreground font-bold" : ""}`}
                >
                  {categories.find(c => c.id === activeCategory)?.name || activeCategory}
                </button>
              </>
            )}

            {activeSubCategory !== "all" && subCategoriesMap[activeCategory] && (
              <>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <span className="text-foreground font-bold flex-shrink-0">
                  {subCategoriesMap[activeCategory].find(s => s.id === activeSubCategory)?.name || activeSubCategory}
                </span>
              </>
            )}
          </div>

          {/* MAIN CATEGORIES */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="flex flex-wrap justify-center gap-3 mb-8 px-4 sm:px-0"
          >
            {categories.map((category) => (
              <motion.button
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4 } }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors flex-shrink-0 shadow-sm ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* SUB CATEGORIES (FOR CATEGORIES WITH SUB ITEMS) */}
          {(activeCategory === "pressure" ||
            activeCategory === "level" ||
            activeCategory === "flow" ||
            activeCategory === "temperature" ||
            activeCategory === "safety" ||
            activeCategory === "valve" ||
            activeCategory === "packing" ||
            activeCategory === "plc") &&
            subCategoriesMap[activeCategory] && (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
                className="flex flex-wrap justify-center gap-3 mb-12 px-4"
              >
                {subCategoriesMap[activeCategory].map((sub) => (
                  <motion.button
                    key={sub.id}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { type: "tween" } }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSubCategory(sub.id)}
                    className={`px-5 py-2 rounded-full text-sm transition-colors shadow-sm ${activeSubCategory === sub.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                  >
                    {sub.name}
                  </motion.button>
                ))}
              </motion.div>
            )}



          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  category={
                    categories.find((c) => c.id === product.category)?.name ||
                    product.category
                  }
                  image={product.image}
                  description={product.description}
                  introduction={product.introduction}
                  benefits={product.benefits}
                  technicalSpecs={product.technicalSpecs}
                  applications={product.applications}
                  imageFit={product.imageFit}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground bg-card/50 rounded-2xl border border-border/50 border-dashed">
                <p className="text-xl font-medium mb-2">No products found</p>
                <p className="text-sm opacity-70">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </main >
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
