import React, { useState } from 'react';

    const initialEquipment = [
      { id: 1, name: 'Petri Dish', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/02/Petridish_1-300x300.jpg', quantity: 10 },
      { id: 2, name: 'Watch Glass', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/02/Watch-Glass-300x300.jpg', quantity: 10 },
      { id: 3, name: 'Graduated Pipette', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/02/18620087-300x300.jpg', quantity: 10 },
      { id: 4, name: 'Volumetric Pipette', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/02/11691624.jpg', quantity: 10 },
      { id: 5, name: 'Burette', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/02/049_We_offer_amber_burettes-300x300.jpg', quantity: 10 },
      { id: 6, name: 'Beaker', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/04/1.Beaker-417010250-2-1-300x300.jpg', quantity: 10 },
      { id: 7, name: 'Erlenmeyer flask', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/04/2.Erlen-flask-417119500-2-300x300.jpg', quantity: 10 },
      { id: 8, name: 'Screw Erlenmeyer flask', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/04/Screw-Erlenmayer-flask-1-300x300.jpg', quantity: 10 },
      { id: 9, name: 'Volumetric flask', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/04/4.volum-flask-431622044-2-300x300.jpg', quantity: 10 },
      { id: 10, name: 'Volumetric flask brown', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/04/Volumetric-flask-brown-1-300x300.jpg', quantity: 10 },
      { id: 11, name: 'Reagent bottle with screw GL45', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/04/Reagent-bottle-with-screw-GL45-1-300x300.jpg', quantity: 10 },
      { id: 12, name: 'Reagent bottle with screw GL45 Brown', available: true, image: 'https://snp-scientific.com/wp-content/uploads/2021/04/Reagent-bottle-with-screw-GL45-brown-1-300x300.jpg', quantity: 10 },
    ];

    function BorrowEquipmentPage() {
      const [equipment, setEquipment] = useState(initialEquipment);
      const [borrowedItems, setBorrowedItems] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [dialogOpen, setDialogOpen] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        borrowDate: '',
        usageDate: '',
        startTime: '',
        endTime: '',
        instructor: '',
      });

      const handleBorrow = (id, quantity) => {
        setEquipment(equipment.map(item =>
          item.id === id ? { ...item, available: false } : item
        ));
        const itemToBorrow = equipment.find(item => item.id === id);
        if (itemToBorrow) {
          const existingItemIndex = borrowedItems.findIndex(item => item.id === id);
          if (existingItemIndex > -1) {
            const updatedItems = [...borrowedItems];
            updatedItems[existingItemIndex] = { ...updatedItems[existingItemIndex], quantity: updatedItems[existingItemIndex].quantity + quantity };
            setBorrowedItems(updatedItems);
          } else {
            setBorrowedItems([...borrowedItems, { ...itemToBorrow, quantity }]);
          }
        }
      };

      const handleRemoveItem = (id) => {
        setBorrowedItems(borrowedItems.filter(item => item.id !== id));
        setEquipment(equipment.map(item =>
          item.id === id ? { ...item, available: true } : item
        ));
      };

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const handleConfirm = () => {
        setDialogOpen(true);
      };

      const handleCloseDialog = () => {
        setDialogOpen(false);
      };

      const filteredEquipment = equipment.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div>
          <h2>Borrow Equipment</h2>
          <div className="form-container">
            <label>ชื่อ-สกุล</label>
   		      <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleInputChange} />
            <label>วันที่ยืม</label>
   					<input type="date" name="borrowDate" value={formData.borrowDate} onChange={handleInputChange} />
    				<label>วันที่ใช้งาน</label>
    				<input type="date" name="usageDate" value={formData.usageDate} onChange={handleInputChange} />
    				<label>เวลาตั้งแต่</label>
    				<input type="time" name="startTime" value={formData.startTime} onChange={handleInputChange} />
    				<label>ถึง</label>
    				<input type="time" name="endTime" value={formData.endTime} onChange={handleInputChange} />
            <label>Instructor</label>
            <input type="text" name="instructor" value={formData.instructor} onChange={handleInputChange} />
            <label>Search</label>
            <input type="text" value={searchTerm} onChange={handleSearch} />
          </div>

          <EquipmentList equipment={filteredEquipment} onBorrow={handleBorrow} />
          
          <div className="table-container">
            <h3>Selected Equipment</h3>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {borrowedItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={handleConfirm}>ตรวจสอบใบเบิก</button>
          {dialogOpen && (
            <BorrowConfirmationDialog
              formData={formData}
              borrowedItems={borrowedItems}
              onClose={handleCloseDialog}
            />
          )}
        </div>
      );
    }

    function EquipmentList({ equipment, onBorrow }) {
      const itemsPerPage = 5;
      const [currentPage, setCurrentPage] = useState(1);

      const totalPages = Math.ceil(equipment.length / itemsPerPage);
      const currentItems = equipment.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

      const paginate = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
      };

      return (
        <div>
          <div className="equipment-list">
            {currentItems.map(item => (
              <EquipmentItem key={item.id} item={item} onBorrow={onBorrow} />
            ))}
          </div>

          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              &lt;
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
              &gt;
            </button>
          </div>
        </div>
      );
    }

    function EquipmentItem({ item, onBorrow }) {
      const [quantity, setQuantity] = useState(1);

      const handleIncrement = () => {
        if (quantity < 10) {
          setQuantity(quantity + 1);
        }
      };

      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };

      return (
        <div className="equipment-item">
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} width="100" />
          <p>Status: {item.available ? 'Available' : 'Borrowed'}</p>
          {item.available && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                <button onClick={handleDecrement} style={{ marginRight: '5px' }}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement} style={{ marginLeft: '5px' }}>+</button>
              </div>
              <button className="borrow-button" onClick={() => onBorrow(item.id, quantity)}>Borrow</button>
            </div>
          )}
        </div>
      );
    }

    function BorrowConfirmationDialog({ formData, borrowedItems, onClose }) {
      return (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2>เอกสารเบิกอุปกรณ์เครื่องแก้ว</h2>
            <p>
              ชื่อ-สกุล: {formData.name}
            </p>
            <p>
              วันที่ยืม: {formData.borrowDate}
            </p>
            <p>
              วันที่ใช้งาน: {formData.usageDate}
            </p>
            <p>
              เวลา: {formData.startTime} ถึง {formData.endTime}
            </p>
            <table >
              <thead>
                <tr>
                  <th>รายการ</th>
                  <th>ชื่ออุปกรณ์</th>
                  <th>จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {borrowedItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="dialog-buttons">
              <button>แก้ไข</button>
              <button onClick={onClose}>ยกเลิก</button>
              <button>ตกลง</button>
            </div>
          </div>
        </div>
      );
    }

    export default BorrowEquipmentPage;
