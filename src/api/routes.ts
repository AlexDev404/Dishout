import { Router, Request, Response } from "express"; // Our routing machine
import {
  Admin,
  Authentication,
  Menu,
  Order, Search,
  Category,
  Review,
} from "./models"; // Import our API models into memory
import { LogRoutes } from "../util/Logger";
const router = Router(); // Initialize!

// Our routes
// Class API
// Authentication
router.post("/auth/signup", Authentication.Register);
router.post("/auth/verify", Authentication.Verify);
router.post("/auth/login", Authentication.Login);
router.post("/auth/passwordreset", Authentication.Request_Reset);
router.patch("/auth/passwordreset", Authentication.Reset);

// Admin-API
// User
router.get("/admin/user/manage", (req: Request, res: Response) => {
  Admin.User.List(req, res);
});
router.post("/admin/user/manage", (req: Request, res: Response) => {
  Admin.User.Create(req, res);
});
router.delete("/admin/user/manage", (req: Request, res: Response) => {
  Admin.User.Delete(req, res);
});
router.put("/admin/user/manage", (req: Request, res: Response) => {
  Admin.User.Modify(req, res);
});

// Promo
router.get("/admin/promo/manage", (req: Request, res: Response) => {
  Admin.Promo.List(req, res);
});
router.post("/admin/promo/manage", (req: Request, res: Response) => {
  Admin.Promo.Create(req, res);
});
router.delete("/admin/promo/manage", (req: Request, res: Response) => {
  Admin.Promo.Delete(req, res);
});
router.put("/admin/promo/manage", (req: Request, res: Response) => {
  Admin.Promo.Modify(req, res);
});
// Category
router.post("/admin/category/manage", (req: Request, res: Response) => {
  Admin.Category.Create(req, res);
});
router.delete("/admin/category/manage", (req: Request, res: Response) => {
  Admin.Category.Delete(req, res);
});
router.put("/admin/category/manage", (req: Request, res: Response) => {
  Admin.Category.Modify(req, res);
});
// Order
// Accept user's order into queue
router.post("/admin/order/manage/", (req: Request, res: Response) => {
  Admin.Order.Modify(req, res);
});
// // Decline user's order into queue
// router.delete("/admin/order/manage/", (req: Request, res: Response) => {
//   Admin.Order.Modify(req, res);
// });
// // Modify user's order in queue
// router.put("/admin/order/manage/", (req: Request, res: Response) => {
//   Admin.Order.Modify(req, res);
// });
// Review
router.get("/admin/review/manage", (req: Request, res: Response) => {
  Admin.Review.List(req, res);
});
router.delete("/admin/review/manage", (req: Request, res: Response) => {
  Admin.Review.Delete(req, res);
});
router.put("/admin/review/manage", (req: Request, res: Response) => {
  Admin.Review.Modify(req, res);
});
// Menu
router.post("/admin/menu/manage", (req: Request, res: Response) => {
  Admin.Menu.Create(req, res);
});
router.delete("/admin/menu/manage", (req: Request, res: Response) => {
  Admin.Menu.Delete(req, res);
});
router.put("/admin/menu/manage", (req: Request, res: Response) => {
  Admin.Menu.Modify(req, res);
});

// User-API
// Menu
router.get("/menu/", (req: Request, res: Response) => {
  Menu.List(req, res);
});

// router.get("/menu/search", (req: Request, res: Response) => {
//   Menu.Lookup(req, res); // Users can lookup other menu items
// });
// Category
router.get("/category/", (req: Request, res: Response) => {
  Category.List(req, res);
});
// Order
// Order History. Arbitrary tokens are accepted --- superceded by search
// router.get("/order/history", (req: Request, res: Response) => {
//   Order.List(req, res);
// });
// Users can lookup their orders
// router.get("/order/search", (req: Request, res: Response) => {
//   Order.Lookup(req, res);
// });

// Order placement. Arbitrary tokens are accepted
router.post("/order/place", (req: Request, res: Response) => {
  Order.Create(req, res);
});
router.delete("/order/place", (req: Request, res: Response) => {
  Order.Delete(req, res);
});
router.put("/order/place", (req: Request, res: Response) => {
  Order.Modify(req, res);
});

// Review
router.post("/review/create", (req: Request, res: Response) => {
  Review.Create(req, res);
});
// Search
router.get("/search", (req: Request, res: Response) => {
  Search.Lookup(req, res); // Users can lookup other users
});

// Print the routes for reference
router.stack.forEach(LogRoutes.bind(null, [])); // Pass in our routes

// Export our router
export default router;
