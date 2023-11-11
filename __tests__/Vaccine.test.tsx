import { render, screen } from "@testing-library/react";
import HospitalCatalog from "@/components/hospitalCatalog";
import { expect } from "@jest/globals";

const mockHospitals = {
  success: true,
  count: 4,
  pagination: {},
  data: [
    {
      _id: "652dc8aca2c20e1c4d35ecf7",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "652dc8aca2c20e1c4d35ecf7",
    },
    {
      _id: "652dc8f3a2c20e1c4d35ecfa",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "652dc8f3a2c20e1c4d35ecfa",
    },
    {
      _id: "652dc945a2c20e1c4d35ecfd",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "652dc945a2c20e1c4d35ecfd",
    },
    {
      _id: "654391740bf47eb0a9d74b26",
      name: "Vajira Hospital",
      address: "681 Samsen Road",
      district: "Dusit",
      province: "Bangkok",
      postalcode: "10300",
      tel: "02-244-3000",
      picture:
        "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      __v: 0,
      id: "654391740bf47eb0a9d74b26",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("should render a list of hospitals correctly", async () => {
    render(await HospitalCatalog({ hospitalJson: mockHospitals }));
    const imageList = screen.getAllByRole("img");
    expect(imageList).toHaveLength(mockHospitals.data.length);
  });
});
