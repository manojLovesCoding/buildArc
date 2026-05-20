import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function CreateDealPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    dealName: "",
    dealValue: "",
    currency: "USD - US Dollar",
    pipelineStage: "New",
    probability: 70,
    expectedCloseDate: "",
    assignedUser: "",
    exhibitor: "",
    lead: "",
    notes: "",
    tags: [],
    attachments: [],
    products: [
      {
        productName: "Exhibition Booth (Premium)",
        quantity: 1,
        unitPrice: 12000,
        total: 12000,
      },
      {
        productName: "Lead Retrieval License",
        quantity: 3,
        unitPrice: 450,
        total: 1350,
      },
    ],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductChange = (
    index,
    field,
    value
  ) => {
    const updatedProducts = [...formData.products];

    updatedProducts[index][field] = value;

    updatedProducts[index].total =
      updatedProducts[index].quantity *
      updatedProducts[index].unitPrice;

    setFormData({
      ...formData,
      products: updatedProducts,
    });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      products: [
        ...formData.products,
        {
          productName: "",
          quantity: 1,
          unitPrice: 0,
          total: 0,
        },
      ],
    });
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts =
      formData.products.filter(
        (_, i) => i !== index
      );

    setFormData({
      ...formData,
      products: updatedProducts,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const totalDealValue =
        formData.products.reduce(
          (acc, item) => acc + item.total,
          0
        );

      const payload = {
        ...formData,
        dealValue: totalDealValue,
      };

      const res = await api.post(
        "/api/deals",
        payload
      );

      alert(
        res.data.message ||
          "Deal created successfully"
      );

      navigate("/sales-pipeline");

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-5">
      <div className="max-w-[1700px] mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-gray-400">
              Sales &gt; Deals &gt; Create New Deal
            </p>

            <h1 className="text-2xl font-semibold text-gray-900 mt-1">
              Create New Deal
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
            >
              ✕ Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
            >
              {loading
                ? "Saving..."
                : "💾 Save Deal"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5">

          {/* LEFT SECTION */}
          <div className="space-y-5">

            {/* DEAL INFORMATION */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">

              <div className="mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Deal Information
                </h2>
              </div>

              <div className="space-y-5">

                {/* Deal Name */}
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                    Deal Name
                  </label>

                  <input
                    type="text"
                    name="dealName"
                    value={formData.dealName}
                    onChange={handleChange}
                    placeholder="e.g. Q4 Exhibition Sponsorship - BuildCorp"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* VALUE & CURRENCY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                      Deal Value
                    </label>

                    <input
                      type="number"
                      value={formData.products.reduce(
                        (acc, item) =>
                          acc + item.total,
                        0
                      )}
                      readOnly
                      className="w-full border border-gray-300 bg-gray-50 rounded-xl px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                      Currency
                    </label>

                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>
                        USD - US Dollar
                      </option>

                      <option>
                        EUR - Euro
                      </option>

                      <option>
                        GBP - British Pound
                      </option>
                    </select>
                  </div>

                </div>

                {/* STAGE & PROBABILITY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                      Pipeline Stage
                    </label>

                    <select
                      name="pipelineStage"
                      value={
                        formData.pipelineStage
                      }
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>New</option>
                      <option>Qualified</option>
                      <option>Proposal</option>
                      <option>Negotiation</option>
                      <option>Closed Won</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                      Probability (%)
                    </label>

                    <input
                      type="number"
                      name="probability"
                      value={formData.probability}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                {/* CLOSE DATE */}
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                    Expected Close Date
                  </label>

                  <input
                    type="date"
                    name="expectedCloseDate"
                    value={
                      formData.expectedCloseDate
                    }
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

            </div>

            {/* PRODUCTS */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">

              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Products & Services
                </h2>

                <button
                  onClick={handleAddProduct}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  + Add Item
                </button>
              </div>

              <div className="overflow-x-auto">

                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b border-gray-200 text-gray-500">
                      <th className="pb-3">
                        Product/Service
                      </th>

                      <th className="pb-3">
                        Qty
                      </th>

                      <th className="pb-3">
                        Unit Price
                      </th>

                      <th className="pb-3">
                        Total
                      </th>

                      <th></th>
                    </tr>
                  </thead>

                  <tbody>

                    {formData.products.map(
                      (item, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100"
                        >

                          <td className="py-4 pr-4">
                            <input
                              type="text"
                              value={
                                item.productName
                              }
                              onChange={(e) =>
                                handleProductChange(
                                  index,
                                  "productName",
                                  e.target.value
                                )
                              }
                              className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            />
                          </td>

                          <td>
                            <input
                              type="number"
                              value={
                                item.quantity
                              }
                              onChange={(e) =>
                                handleProductChange(
                                  index,
                                  "quantity",
                                  Number(
                                    e.target.value
                                  )
                                )
                              }
                              className="w-16 border border-gray-300 rounded-lg px-2 py-1"
                            />
                          </td>

                          <td>
                            <input
                              type="number"
                              value={
                                item.unitPrice
                              }
                              onChange={(e) =>
                                handleProductChange(
                                  index,
                                  "unitPrice",
                                  Number(
                                    e.target.value
                                  )
                                )
                              }
                              className="w-28 border border-gray-300 rounded-lg px-2 py-1"
                            />
                          </td>

                          <td className="font-medium">
                            $
                            {item.total.toLocaleString()}
                          </td>

                          <td>
                            <button
                              onClick={() =>
                                handleRemoveProduct(
                                  index
                                )
                              }
                              className="text-red-500"
                            >
                              ✕
                            </button>
                          </td>

                        </tr>
                      )
                    )}

                  </tbody>
                </table>

              </div>

            </div>

            {/* NOTES */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Notes
              </h2>

              <textarea
                rows={6}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add internal notes about this deal..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-5">

            {/* RELATIONSHIPS */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">

              <h2 className="text-lg font-semibold text-gray-800 mb-5">
                Relationships
              </h2>

              <div className="space-y-5">

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                    Exhibitor ID
                  </label>

                  <input
                    type="text"
                    name="exhibitor"
                    value={formData.exhibitor}
                    onChange={handleChange}
                    placeholder="Enter exhibitor ID"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                    Lead ID
                  </label>

                  <input
                    type="text"
                    name="lead"
                    value={formData.lead}
                    onChange={handleChange}
                    placeholder="Enter lead ID"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

            </div>

            {/* SUMMARY */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">

              <h2 className="text-lg font-semibold text-gray-800 mb-5">
                Deal Summary
              </h2>

              <div className="space-y-4 text-sm">

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Products
                  </span>

                  <span className="font-medium">
                    {formData.products.length}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Pipeline
                  </span>

                  <span className="font-medium">
                    {formData.pipelineStage}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Probability
                  </span>

                  <span className="font-medium">
                    {formData.probability}%
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="font-medium text-gray-700">
                    Total Deal Value
                  </span>

                  <span className="text-xl font-bold text-blue-600">
                    $
                    {formData.products
                      .reduce(
                        (acc, item) =>
                          acc + item.total,
                        0
                      )
                      .toLocaleString()}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}