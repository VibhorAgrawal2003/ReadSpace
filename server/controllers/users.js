import { getSupabase } from "../supabaseClient.js";

// Fetch all users
export const getUsersAll = async (req, res) => {
    try {
        const supabase = getSupabase();

        const { data, error, count } = await supabase
            .from("users")
            .select("*", { count: "exact" })
            .order("username", { ascending: true });

        if (error) throw error;

        res.status(200).json({
            users: data,
            totalUsers: count,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch user by username
export const getUser = async (req, res) => {
    try {
        const supabase = getSupabase();
        const { username } = req.params;
        const { data, error } = await supabase.from("users").select("*").eq("username", username).single();

        if (error) throw error;

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Search users by username
export const searchUsers = async (req, res) => {
    try {
        const supabase = getSupabase();
        const { q } = req.query;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { data, error, count } = await supabase
            .from("users")
            .select("*", { count: "exact" })
            .ilike("username", `%${q}%`)
            .range(offset, offset + limit - 1)
            .order("username", { ascending: true });

        if (error) throw error;

        res.status(200).json({
            users: data,
            currentPage: page,
            totalPages: Math.ceil(count / limit),
            totalUsers: count,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
