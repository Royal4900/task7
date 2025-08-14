// DOM Elements
const fetchBtn = document.getElementById('fetchBtn');
const reloadBtn = document.getElementById('reloadBtn');
const retryBtn = document.getElementById('retryBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const usersContainer = document.getElementById('usersContainer');

// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Event Listeners
fetchBtn.addEventListener('click', fetchUsers);
reloadBtn.addEventListener('click', fetchUsers);
retryBtn.addEventListener('click', fetchUsers);

// Fetch users from API
async function fetchUsers() {
    showLoading();
    hideError();
    clearUsers();

    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        displayUsers(users);
        hideLoading();
        
    } catch (err) {
        console.error('Error fetching users:', err);
        showError(err.message);
        hideLoading();
    }
}

// Display users in cards
function displayUsers(users) {
    // Transform the user data to show custom information
    const transformedUsers = users.map((user, index) => {
        // Custom user data - Indian names and details
        const customData = [
            {
                name: "Rajesh Kumar",
                email: "rajesh.kumar@techsolutions.in",
                phone: "+91 98765 43210",
                website: "github.com",
                company: "Tech Solutions India Pvt Ltd",
                address: {
                    street: "123 MG Road",
                    suite: "Floor 5, Office 501",
                    city: "Mumbai",
                    zipcode: "400001",
                    geo: { lat: "19.0760", lng: "72.8777" }
                }
            },
            {
                name: "Priya Sharma",
                email: "priya.sharma@creative.in",
                phone: "+91 87654 32109",
                website: "linkedin.com",
                company: "Creative Design Studio India",
                address: {
                    street: "456 Koramangala Main Road",
                    suite: "Block A, Suite 302",
                    city: "Bangalore",
                    zipcode: "560034",
                    geo: { lat: "12.9716", lng: "77.5946" }
                }
            },
            {
                name: "Amit Patel",
                email: "amit.patel@startup.in",
                phone: "+91 76543 21098",
                website: "stackoverflow.com",
                company: "Innovation Labs India",
                address: {
                    street: "789 Cyber City",
                    suite: "Tower 3, Floor 8",
                    city: "Gurgaon",
                    zipcode: "122002",
                    geo: { lat: "28.4595", lng: "77.0266" }
                }
            },
            {
                name: "Neha Singh",
                email: "neha.singh@healthcare.in",
                phone: "+91 65432 10987",
                website: "medium.com",
                company: "Healthcare Solutions India",
                address: {
                    street: "321 Connaught Place",
                    suite: "Building 2, Office 15",
                    city: "New Delhi",
                    zipcode: "110001",
                    geo: { lat: "28.6139", lng: "77.2090" }
                }
            },
            {
                name: "Vikram Malhotra",
                email: "vikram.malhotra@finance.in",
                phone: "+91 54321 09876",
                website: "twitter.com",
                company: "Global Finance India Ltd",
                address: {
                    street: "654 Banjara Hills",
                    suite: "Road No. 12, Office 8",
                    city: "Hyderabad",
                    zipcode: "500034",
                    geo: { lat: "17.3850", lng: "78.4867" }
                }
            }
        ];
        
        // Use custom data if available, otherwise use original data
        const customUser = customData[index] || user;
        
        return {
            ...user,
            name: customUser.name,
            email: customUser.email,
            phone: customUser.phone,
            website: customUser.website,
            company: { name: customUser.company },
            address: customUser.address
        };
    });
    
    transformedUsers.forEach(user => {
        const userCard = createUserCard(user);
        usersContainer.appendChild(userCard);
    });
}

// Create individual user card
function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    
    const initials = getUserInitials(user.name);
    
    card.innerHTML = `
        <div class="user-header">
            <div class="user-avatar">${initials}</div>
            <div class="user-info">
                <h3>${user.name}</h3>
                <div class="username">@${user.username}</div>
            </div>
        </div>
        
        <div class="user-details">
            <div class="detail-item">
                <div class="detail-icon">📧</div>
                <div class="detail-content">
                    <div class="detail-label">Email</div>
                    <div class="detail-value">${user.email}</div>
                </div>
            </div>
            
            <div class="detail-item">
                <div class="detail-icon">📱</div>
                <div class="detail-content">
                    <div class="detail-label">Phone</div>
                    <div class="detail-value">${user.phone}</div>
                </div>
            </div>
            
                         <div class="detail-item">
                 <div class="detail-icon">🌐</div>
                 <div class="detail-content">
                     <div class="detail-label">Website</div>
                     <div class="detail-value">
                         <a href="https://${user.website}" target="_blank" style="color: #667eea; text-decoration: none;">
                             ${user.website}
                         </a>
                     </div>
                 </div>
             </div>
            
            <div class="detail-item">
                <div class="detail-icon">🏢</div>
                <div class="detail-content">
                    <div class="detail-label">Company</div>
                    <div class="detail-value">${user.company.name}</div>
                </div>
            </div>
            
            <div class="detail-item">
                <div class="detail-icon">📍</div>
                <div class="detail-content">
                    <div class="detail-label">Address</div>
                    <div class="detail-value address">
                        ${user.address.street}, ${user.address.suite}<br>
                        ${user.address.city}, ${user.address.zipcode}<br>
                        ${user.address.geo.lat}, ${user.address.geo.lng}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Get user initials from name
function getUserInitials(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

// Show loading state
function showLoading() {
    loading.classList.remove('hidden');
}

// Hide loading state
function hideLoading() {
    loading.classList.add('hidden');
}

// Show error state
function showError(message) {
    errorMessage.textContent = message;
    error.classList.remove('hidden');
}

// Hide error state
function hideError() {
    error.classList.add('hidden');
}

// Clear users container
function clearUsers() {
    usersContainer.innerHTML = '';
}

// Auto-fetch users when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add keyboard shortcut (Ctrl+R or Cmd+R) to reload
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
            e.preventDefault();
            fetchUsers();
        }
    });
});
