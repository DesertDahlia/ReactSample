// src/TestPage.js
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';

function TestPage() {

  const bookData = [
    { id: 1, title: 'React入門', author: '山田 太郎', year: 2021 },
    { id: 2, title: 'JavaScript深堀り', author: '鈴木 次郎', year: 2019 },
    { id: 3, title: 'TypeScript 実践ガイド', author: '田中 花子', year: 2022 },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  // アクションボタンのメニューを開く
  const handleMenuClick = (event, book) => {
    setAnchorEl(event.currentTarget);
    setSelectedBook(book);
  };

  // メニューを閉じる
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedBook(null);
  };

  // 編集アクション
  const handleEdit = () => {
    console.log('編集する書籍:', selectedBook);
    handleClose();
  };

  // 削除アクション
  const handleDelete = () => {
    console.log('削除する書籍:', selectedBook);
    handleClose();
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" gutterBottom align="center" mt={3}>
        書籍管理一覧
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>書籍ID</TableCell>
            <TableCell>書籍タイトル</TableCell>
            <TableCell>著者</TableCell>
            <TableCell>発行年</TableCell>
            <TableCell align="center">アクション</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookData.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.id}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.year}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  onClick={(event) => handleMenuClick(event, book)}
                >
                  アクション
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleEdit}>編集</MenuItem>
                  <MenuItem onClick={handleDelete}>削除</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TestPage;