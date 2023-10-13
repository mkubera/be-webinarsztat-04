const All = {
  timestamps: (item: any) => ({
    ...item,
    createdAt: Date.now(),
    editedAt: Date.now(),
  }),
};

export default All;
